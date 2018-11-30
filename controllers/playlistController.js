const mongoose = require('mongoose'); //libreria para el manejo a la conexion de bases de datos
const playlistModel = require("../models/playlist"); //modelo publicacioes.
const controller = {}; // objeto que tendra la logica de nuestra web
var fs = require('fs.extra');



controller.insert = function(req,res){
    //Nombre de la imagen
    var extension = req.files.archivo.name;
    if(extension == ""){
        extension = "playlist.png";
    }
    //Data que se guardara en la base
    let data = {
        titulo: req.body.titulo,
        imagenExtension: extension,
        usuario: JSON.parse(req.session.user).username,
        galeria: []
    };
    //Se crea el modelo poneindo como datos la data
    for(var x =0;x<req.body.nombre.length;x++){
        cancion={
            nombre:req.body.nombre[x],
            album:req.body.album[x],
            artista: req.body.album[x]
        }
        data.galeria.push(cancion);
    }
    var newPlaylist = playlistModel(data);
    //Se guarda
    newPlaylist.save(function(err){
        if(!err){
            //Se cambia la direccion para guardar la imagen en public/images
            if(req.files.archivo.name != ""){
                fs.copy(req.files.archivo.path, "public/images/"+extension);
            }
            res.json({
                ok: true,
                playlist: newPlaylist
            });
        } else {
            res.status(500);
            res.json({
                ok: false,
                err
            });
        }
    });
};

controller.getAll = function (req, res) {
    // Obtener todos los post de la base datos
    playlistModel.find({},function(err,playlist){
        if (err) {
            console.log(err);
            res.status(500);
            res.json({code:500, err});  
        } else {
            //console.log(posts);
            res.json({ ok:true , playlist});
        }
    });
    // Enviarlos como respuesta en JSON
};

controller.showOnlyUserPlaylist = function(req,res){
    // Obtener todos los post de la base datos
    playlistModel.find({usuario: req.params.username},function(err, playlist){
        if (err) {
            res.status(500);
            res.json({code:500, err}); 
        } else {
            //console.log(posts);
            res.json({ ok:true , playlist});
        }
    });
    // Enviarlos como respuesta en JSON
}

module.exports = controller;