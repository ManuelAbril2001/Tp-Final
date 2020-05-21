let db = require("../database/models")

module.exports = {
    index: function(req,res){
        res.render('registro')

    },
    crear: function(req, res){
        db.usuarios.create({ 
            email: req.body.email,
            contrasenia: req.body.password,
            nombre_de_usuario: req.body.username,

        })
        res.redirect("/registro")
    }

}