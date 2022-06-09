const {Router} = require('express')
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/events')
const {validarJWT} = require('../middlewares/validar-jwt')


const router = Router()

// Todas tienen que pasar por la validacion del JWT
// Obtener eventos
router.get('/',validarJWT, getEventos)

// Crear Eventos
router.post('/',validarJWT, crearEvento)

// Actualizar evento
router.put('/:id',validarJWT, actualizarEvento)

// Eliminar Evento
router.delete('/:id',validarJWT, eliminarEvento)

module.exports = router