const router = require("express").Router()
const ciudadController = require("../controllers/ciudades")

router.post('/agregarCiudades',ciudadController.postAgregarCiudades)
router.get('/obtenerCiudades',ciudadController.getObtenerCiudades)
router.post('/actualizarCiudades',ciudadController.postActualizarCiudades)
router.post('/borrarCiudades',ciudadController.postBorrarCiudades)

module.exports = router