const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const elementoSchema = new Schema ({
    nombre: String, 
    fecha: String,
    salon: Number, 
    escuela: String,
    elemento: String 
}, {versionKey: false})

module.exports = mongoose.model('elementos', elementoSchema)  