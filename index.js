const express = require('express')
require('dotenv').config()
const {dbConection} = require('./database/config')
const cors = require('cors')

// Crear el servidor de express
const app = express()

// Base de datos
dbConection()

// CORS
app.use(cors())

// Directorio publico
app.use(express.static('public'))

// Lectura y parceo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: eventos


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Sevidor corriendo en el puerto ${process.env.PORT}`)
})