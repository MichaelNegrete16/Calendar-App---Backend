const express = require('express')

// Crear el servidor de express
const app = express()

// Rutas
app.get('/', (req,res) => {
    res.json({
        ok: true
    })
})

// Escuchar peticiones
app.listen(4000, () => {
    console.log(`Sevidor corriendo en el puerto ${4000}`)
})