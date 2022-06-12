const {response} = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req,res = response) => {

    const eventos = await Evento.find()
                                .populate('user','name')

    res.status(200).json({
        ok:true,
        msg:eventos
    })
}

const crearEvento = async(req,res = repsonse) => {
    
    const evento = new Evento(req.body)

    try {
        evento.user = req.uid
        const eventoGuardado = await evento.save()

        res.json({
            ok:false,
            msg: eventoGuardado
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'ha ocurrido un error Contacte a un admin!'
        })

    }
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