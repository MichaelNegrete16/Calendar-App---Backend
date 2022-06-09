const {response} = require('express')


const getEventos = (req,res = response) => {
    res.status(200).json({
        ok:true,
        msg:'GetEvento'
    })
}

const crearEvento = (req,res = repsonse) => {
    // Verificar que tenga el evento
    console.log(req.body)

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