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

const actualizarEvento  = async (req,res = response) => {

    const eventoId = req.params.id
    const uid = req.uid

    try {
        
        // Consultar que el id sea valido
        const evento = await Evento.findById(eventoId)
        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:"Evento no existe por ese ID"
            })
        }
        // Verificar que solo el creador pueda editar el evento
        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegios para editar este evento'
            })
        }

        // El nuevo evento
        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        // Actualizar el evento
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true})

        res.json({
            ok:true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:"Hable con un administrador"
        })
    }

}

const eliminarEvento = async (req,res = response) => {

    const eventoId = req.params.id
    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoId)
        if(!evento){
            return res.status(404).json({
                ok: false,
                msg:'Evento no existe por ese ID'
            })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegios para eliminar este evento'
            })
        }

        await Evento.findByIdAndDelete(eventoId)

        res.json({
            ok:true,
            msg:'Evento eliminado con exito'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Hable con un administrador'
        })
    }

}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}