const Pokemon = require("../models/pokemon")
const mongoose = require("mongoose")

exports.postAgregarPokemon = async (req,res)=>{
    const pokemon = new Pokemon(req.body)
    pokemon._id = new mongoose.Types.ObjectId()
    try{
        //Agregar el documento a la coleccion
        await pokemon.save()
        console.log(pokemon)
        console.log("Pokemon registrado")
        res.send({operacion:"correcta"})
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.getObtenerPokemon = async (req,res)=>{
    const pok = await Pokemon.find()
    console.log(pok)
    res.json(pok)
}

exports.postActualizarPokemon = async (req,res)=>{
    //Filtro y cambio
    try{
        await Pokemon.findOneAndUpdate(req.body.filtro, req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion:"correcta"})
    } catch(err){
        console.log(err)
    }
    
}

exports.postBorrarPokemon = async (req,res)=>{
    await Pokemon.findByIdAndRemove(req.body)
    console.log("Pokemon eliminado")
    res.json({operacion:"correcta"})
}