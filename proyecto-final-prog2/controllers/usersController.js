let db = require("../database/models")
let Op = db.sequelize.Op;
const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin')

module.exports = {
    index: function(req,res){
        res.render('login')

    },
    login: function(email,pass){
        
        return db.usuarios.findOne({
            where:{
                email:email,
                contrasenia:password
            },
        })

        .then(results => {
            if(results!=null){
                let validacion = bcrypt.compareSync(pass, results.password)
                moduloLogin.validar(email,contrasenia)
                if(validacion){  
                    res.redirect('/resenia')
                    return results
                   
                    
                }else{
                    return undefined
                }
            }else{
                    return undefined
                }
            })
        
            

            
        
    }
    

}