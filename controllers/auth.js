const {response} = require('express')
const Usuario = require('../models/Usuario')

const crearUsuario = async (req,res = response) => {
    
    const {email,password} = req.body
    try {

        let usuario = await Usuario.findOne({email})
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario ya existe con ese correo'
            })
        }

        usuario = new Usuario(req.body)
        await usuario.save()

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name:usuario.name
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Se presento un error, hable con el administrador'
        })
    }
    
}

const loginUsuario = (req,res = response )=> {

    const {email,password} = req.body

    res.status(200).json({
        ok:true,
        msg:'Login',
        email,
        password
    })
}

const revalidarToken = (req,res = response) => {
    res.json({
        ok:true,
        msg:'Renew'
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}