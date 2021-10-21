const mongoose = require('mongoose')

const CiudadesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pais:{
        type:String,
        required: true
    },
    nombre:{
        type:String
    },
    descripcion:{
        type:String,
        required: false
    },
    contadorinteres:{
        type:Number
    }
},{collection:'ciudades'});

// Compile model from schema
module.exports = mongoose.model('ciudades', CiudadesSchema )