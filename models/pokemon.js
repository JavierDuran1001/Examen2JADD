const mongoose = require('mongoose')

const PokemonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required: true
    },
    numero:Number,
    tipo:{
        type:[String]
    },
    descripcion:{
        type:String,
        required: false
    }
},{collection:'pokemon'});

// Compile model from schema
module.exports = mongoose.model('pokemon', PokemonSchema )