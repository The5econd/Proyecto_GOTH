/*const mongoose = require('mongoose'); //Para manipular conexión y el manejo de la base de datos
const cancionesModel = require("../models/canciones");

const { Schema } = mongoose; //Objeto Schema para realizar diferentes operaciones
const playlistSchema = new Schema({
    //atributos con sus validaciones
    titulo:String,
    imagen: {type:String},
    //canciones: [cancionesModel]
});


let playlist = mongoose.model('playlist', playlistSchema);

module.exports = playlist;*/