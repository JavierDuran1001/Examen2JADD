const express = require("express")
const consVjController = require('../controllers/consolaVideojuego')
const router = express.Router()


//Formulario de ingreso de datos
router.get('/agregarConsolaVideojuegos',consVjController.getAgregarConsolaVideojuegos)
//Servicio para el procesamiento de los datos
router.post('/agregarConsolaVideojuegos',consVjController.postAgregarConsolaVideojuegos)
//Pagina de confirmacion
router.get('/confirmacionDatos',consVjController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsolaVideojuegos',consVjController.getObtenerConsolaVideojuegos)
router.post('/borrarConsolaVideojuegos',consVjController.postBorrarConsolaVideojuegos)
router.post('/actualizarConsolaVideojuegos',consVjController.postActualizarConsolaVideojuegos)
module.exports = router