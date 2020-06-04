let db = require("../database/models")
let Op = db.sequelize.Op;
const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin')

module.exports = {
    index: function(req,res){
        res.render('registro')

    },
    crear: function(req, res){
        db.usuarios.create({ 
            email: req.body.email,
            contrasenia: bcrypt.hashSync(req.body.password,10),
            nombre_de_usuario: req.body.username,
            fecha_de_nacimiento: req.body.nacimiento

        })
        res.redirect("/")
    },

  /*   login: function(email,pass){
        
        return db.usuarios.findOne({
            where:{
                email:email,
                contrasenia:password
            },
        })

        .then(results => {
            if(results!=null){
                let validacion = bcrypt.compareSync(pass, results.password)
                if(validacion){
                    return results;

                }else{
                    return undefined
                }
            }else{
                    return undefined
                }
            })
        
    } */
    

}