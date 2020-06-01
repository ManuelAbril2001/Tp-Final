let db = require("../database/models")
let Op = db.sequelize.Op;
const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin');

module.exports = {
    index: function(req,res){
        res.render('login')

    },
    login: function(req,res){
        
        return db.usuarios.findOne({
            where:{
                email:req.body.email,
                contrasenia:req.body.password
            },
        })

        .then(results => {
            if(results!=null){
                console.log(results.contrasenia)
                let validacion = bcrypt.compareSync(req.body.password, results.contrasenia)
                moduloLogin.validar(req.body.email,req.body.password)
                if(validacion){  
                    return res.redirect('/resenia')                  
                }else{
                    return undefined
                }
            }else{
                    return undefined
                }
            })
        
            

            
        
    }
    

}