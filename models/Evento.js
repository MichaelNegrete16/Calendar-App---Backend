const {Schema, model} = require('mongoose')

const EventoSchema = Schema({

    title: {
        type: String,
        require: true,
    },
    notes:{
        type: String
    },
    startDate:{
        type: Date,
        require: true
    },
    endDate:{
        type: Date,
        require: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }


})

module.exports = model('Evento', EventoSchema)