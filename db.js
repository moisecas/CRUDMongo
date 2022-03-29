//conexión a la base de datos 
const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_elementos'

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //useFindAndModify: false, 
    //useCreateIndex: true,  
})

const db = mongoose.connection
db.on('error', console.error.bind(console,'error al conectar MongoDB')) 
db.once('open', function callback(){
    console.log("conectado a mongodb")
})

module.exports= db  