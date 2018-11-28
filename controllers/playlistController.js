/*
const mongoose = require('mongoose'); //libreria para el manejo a la conexion de bases de datos
const playlistModel = require("../models/playlist"); //modelo publicacioes.
const controller = {}; // objeto que tendra la logica de nuestra web
const cancionesModel = require("../models/canciones");

controller.insert = function(req,res){
    let galeriaCanciones = new cancionesModel({
        nombre: req.body.nombre,
        album: req.body.Album,
        artista: req.body.Artista
    });

    let newPlaylist = new playlistModel({
        titulo: req.body.titulo,
        imagen: req.body.imagen,
        //canciones: [galeriaCanciones]
    });

    console.log(newPlaylist);

    newPlaylist.save(function(err,insertado){
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


module.exports = controller;*/