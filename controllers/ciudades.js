const Ciudades = require("../models/ciudades")
const mongoose = require("mongoose")

exports.postAgregarCiudades = async (req,res)=>{
    const ciudad = new Ciudades(req.body)
    ciudad._id = new mongoose.Types.ObjectId()
    try{
        const CiudadExistente = await Ciudades.exists({ciudad: req.body.ciudad, lugar: req.body.lugar, contadorinteres: req.body.contadorinteres})
        if (CiudadExistente) {
            res.send({operacion: "ciudad ya registrada"})
            res.findOneAndUpdate(req.body.contadorinteres, req.body.contadorinteres+1)

        //Agregar el documento a la coleccion
        } else {
            await ciudad.save()
            console.log(ciudad)
            console.log("Ciudad registrada")
            res.send({operacion:"correcta"})
        }
        
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.getObtenerCiudades = async (req,res)=>{
    const ciu = await Ciudades.find()
    console.log(ciu)
    res.json(ciu)
}

exports.postObtenerCiudades = async (req,res)=>{
    try{
        const ciu = await Ciudades.findOne(req.body.nombre)
        res.send(ciu)
    } catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.postActualizarCiudades = async (req,res)=>{
    //Filtro y cambio
    try{
        await Ciudades.findOneAndUpdate(req.body.filtro, req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion:"correcta"})
    } catch(err){
        console.log(err)
    }
    
}

exports.postBorrarCiudades = async (req,res)=>{
    await Ciudades.findByIdAndRemove(req.body)
    console.log("Ciudad eliminada")
    res.json({operacion:"correcta"})
}