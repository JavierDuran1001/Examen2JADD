const router = require("express").Router()
const pokemonController = require("../controllers/pokemon")

router.post('/agregarCiudades',pokemonController.postAgregarPokemon)
router.get('/obtenerPokemon',pokemonController.getObtenerPokemon)
router.post('/actualizarPokemon',pokemonController.postActualizarPokemon)
router.post('/borrarPokemon',pokemonController.postBorrarPokemon)

module.exports = router