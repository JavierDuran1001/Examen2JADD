const express = require("express")
const consoleController = require('../controllers/consola')
const router = express.Router()


//Formulario de ingreso de datos
router.get('/agregarConsola',consoleController.getAgregarConsola)
//Servicio para el procesamiento de los datos
router.post('/agregarConsola',consoleController.postAgregarConsola)
//Pagina de confirmacion
router.get('/confirmacionDatos',consoleController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsola',consoleController.getObtenerConsola)
router.post('/borrarConsola',consoleController.postBorrarConsola)
router.post('/actualizarConsola',consoleController.postActualizarConsola)
module.exports = router