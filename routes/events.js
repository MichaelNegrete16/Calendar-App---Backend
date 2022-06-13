const {Router} = require('express')
const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/events')
const {validarJWT} = require('../middlewares/validar-jwt')
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {isDate} = require('../helpers/isDate')

const router = Router()

// Todas tienen que pasar por la validacion del JWT
// Obtener eventos
router.get('/',validarJWT, getEventos)

// Crear Eventos
router.post('/',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('startDate','La fecha de inicio es obligatorio').custom(isDate),
    check('endDate','La fecha de finalizacion es obligatorio').custom(isDate),
    validarCampos,validarJWT
], crearEvento)

// Actualizar evento
router.put('/:id',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('startDate','La fecha de inicio es obligatorio').custom(isDate),
    check('endDate','La fecha de finalizacion es obligatorio').custom(isDate),
    validarCampos,validarJWT
], actualizarEvento)

// Eliminar Evento
router.delete('/:id',validarJWT, eliminarEvento)

module.exports = router