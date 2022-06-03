const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Directorio publico
app.use(express.static('public'))

// Rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: eventos


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${process.env.PORT}`)
})