let db = require("../database/models")
let Op = db.sequelize.Op;
//const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin')

module.exports = {
    index: function(req,res){
        res.render('index')

    }
}
/* index: function(req,res){
       
    db.usuarios.findOne({
        where: {email: req.body.email, contrasenia: req.body.password}

    })
    .then( res =>{
        res.render('index')
    })
    .catch(function(error){
        return res.send(error);
    })
}
} */