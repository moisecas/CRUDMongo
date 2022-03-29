const Elemento = require('../model/Elementos') 

//mostrar 
module.exports.mostrar = (req,res)=>{
    Elemento.find({}, (error, elementos)=>{
        if(error){
            return res.status(500).json({
                message: 'error mostrando elementos' 
            }) 
        }
        return res.render('index.ejs')      
    })
}