const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()


//Formulario de ingreso de datos
router.get('/agregarVideojuegos',vjController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarVideojuegos',vjController.postAgregarVideojuego)
//Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
router.post('/borrarVideojuegos',vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)
module.exports = router