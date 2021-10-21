const express = require("express")
const mongoose = require("mongoose")
const pokemonRoutes = require("./routes/pokemon")
const ciudadesRoutes = require("./routes/ciudades")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/pokemon",pokemonRoutes)
app.use("/ciudades",ciudadesRoutes)

mongoose.connect('mongodb://user3:root@18.234.222.26:27017/base3?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log("Servidor en linea"))
})
.catch(err=>console.log(err))