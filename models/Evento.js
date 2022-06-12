const {Schema, model} = require('mongoose')

const EventoSchema = Schema({

    title: {
        type: String,
        required: true,
    },
    notes:{
        type: String
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }


})

// Cambiar el nombre de _id a id y quitar el _v
EventoSchema.method('toJSON', function(){
    const {__v , _id ,...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Evento', EventoSchema)