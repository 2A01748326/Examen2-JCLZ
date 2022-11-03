const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona') //Ya no necesita la extension
//Create, Read, Update, Delete (CRUD) ABCC (Alta, Bajas, Cambios, Consultas)

//Servicio para procesar los datos del formulario
router.post('/createPersona', personaController.postAltaPersona);
//Servicio para consultar todos los datos
router.get('/readPersona', personaController.getPersona);
module.exports = router;
