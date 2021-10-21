const path = require('path')
const ConsVj = require('../utils/database').models.consolaVideojuego

exports.getAgregarConsolaVideojuegos = (req,res)=>{
    res.send("Formulario")
} 

exports.postAgregarConsolaVideojuegos = (req,res)=>{
    console.log(req.body) //<={id: number, nombre: text}
    ConsVj.create(req.body)
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

exports.getObtenerConsolaVideojuegos = (req,res)=>{
    ConsVj.findAll()
        .then(ConsVj =>{
            console.log(ConsVj)
            res.json(ConsVj)
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postBorrarConsolaVideojuegos = (req,res)=>{
    console.log(req.body)
    ConsVj.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("ConsVj eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsolaVideojuegos = (req,res)=>{
    console.log(req.body)
    ConsVj.update({
        lanzamiento: req.body.lanzamiento
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("ConsVj actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}