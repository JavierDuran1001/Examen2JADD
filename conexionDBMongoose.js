const mongoose = require('mongoose')
//usuario:password@IP:puerto/bd_nombre?authSource=db_usuarios
mongoose.connect('mongodb://user3:root@18.234.222.26:27017/base3?authSource=admin')
.then(()=>console.log("Conexion exitosa"))
.catch(err=>console.log(err))

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema
const PokemonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
    },
    numero:{
        type:Number
    },
    tipo:{
        type:String
    },
    descripcion:{
        type:String,
        required: false
    }
},{collection:'pokemon'});

// Compile model from schema
var Pokemon = mongoose.model('pokemon', PokemonSchema );

const pokemon=new Pokemon({
    nombre:"Squirtle",
    numero:7,
    tipo:"agua",
    descripcion:"Dinosaurio de fuego",
    _id:new mongoose.Types.ObjectId()
  })

//CREATE
/*pokemon.save()
  .then(()=>{
      console.log(pokemon);
      console.log('Pokemon creado');
  })
  .catch(err=>console.log())*/
//READ
Pokemon.find()
  .then(resultado=>{
      console.log(resultado)
  })
  .catch()

Pokemon.findOne()
  .then(resultado=>{
      console.log(resultado.nombre)
  })
  .catch()

  //UPDATE
  async function actualizar(){
    try{
        
        await Pokemon.findOneAndUpdate({nombre:"Charmander"},{numero:4})

        let pok= await Pokemon.findOne({nombre:"Charmander"})
        console.log(pok)

    }catch(err){
        console.log(err)
    }
  }

  //actualizar()

  //DELETE
  const eliminar = async ()=>{
      await Pokemon.findByIdAndRemove("6165fb64082eab2aaef1f69e")
      console.log("Pokemon eliminado")
      let pok = await Pokemon.find()
      console.log(pok)
  }
  eliminar()


