const path = require('path')
const Consola = require('../utils/database').models.consola

exports.getAgregarConsola = (req,res)=>{
    res.send("Formulario")
} 

exports.postAgregarConsola = (req,res)=>{
    console.log(req.body) //<={id: number, nombre: text}
    Consola.create(req.body)
        .then(vj=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion")
}

exports.getObtenerConsola = (req,res)=>{
    Consola.findAll()
        .then(consola =>{
            console.log(consola)
            res.json(consola)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postBorrarConsola = (req,res)=>{
    console.log(req.body)
    Consola.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsola = (req,res)=>{
    console.log(req.body)
    Consola.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}