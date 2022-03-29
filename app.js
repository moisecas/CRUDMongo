//archivo principal para nuestro servidor 

const express = require('express')
const app = express()

const db = require('./db') 
 
app.set ('view enigme', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public')) 

const elementos = require('./routes/elementos')
app.use(elementos) 

app.listen(3000, ()=>{
    console.log('server up en localhost 3000') 
})