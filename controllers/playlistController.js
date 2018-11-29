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
        usuario:req.body.usuario,
        galeria: []
    };
    //Se seleccionan todas las canciones
    console.log(req.body.nombre);
    console.log(req.body.album);
    console.log(req.body.artista);
    var cancion = {
        nombre: req.body.nombre,
        artista: req.body.artista,
        album: req.body.album
    };
    galeria.push(cancion);
    //Se crea el modelo poneindo como datos la data
    var newPlaylist = playlistModel(data);
    //Se guarda
    newPlaylist.save(function(err){
        if(!err){
            //Se cambia la direccion para guardar la imagen en public/images
            if(req.files.archivo.name != ""){
                fs.copy(req.files.archivo.path, "public/images/"+extension);
            }
            res.json({
                ok: true
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


module.exports = controller;