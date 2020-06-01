let db = require("../database/models")
let Op = db.sequelize.Op;
const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin');

module.exports = {
    index: function(req,res){
        res.render('login')

    },
    login: function(req,res){
        

        moduloLogin.validar(req.body.email, req.body.password)
        .then(results => {
            if(results!=null){
                    return res.redirect('/resenias')                  

            }else{
                    res.send("error de login")
                }
            })
        
            

            
        
    }
    

}