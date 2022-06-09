const {response} = require('express')


const getEventos = (req,res = response) => {
    res.status(200).json({
        ok:true,
        msg:'GetEvento'
    })
}

const crearEvento = (req,res = repsonse) => {
    res.status(200).json({
        ok:true,
        msg:'Crear Evento'
    })
}

const actualizarEvento  = (req,res = response) => {
    res.status(200).json({
        ok:true,
        msg:'Actualizar Evento'
    })
}

const eliminarEvento = (req,res = response) => {
    res.status(200).json({
        ok:true,
        msg:'Eliminar evento'
    })
}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}