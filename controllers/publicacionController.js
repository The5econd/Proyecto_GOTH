const mongoose = require('mongoose'); //libreria para el manejo a la conexion de bases de datos
const publicacionModel = require("../models/publicaciones"); //modelo publicacioes.
const controller = {}; // objeto que tendra la logica de nuestra web


controller.insert = function(req,res){
    let publicacionNew = new publicacionModel({
        titulo: req.body.titulo,
        texto: req.body.texto,
        autor: JSON.parse(req.session.user).email
    });

    //console.log(publicacionNew);

    publicacionNew.save(function(err,insertado){
        if(err){
            res.status(500);
            res.json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                insertado
            });
        }
    });
};


module.exports = controller;