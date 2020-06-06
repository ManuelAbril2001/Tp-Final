let db = require("../database/models");
let op = db.Sequelize.Op;
module.exports = {
    index: function(req,res){
      res.render('resultados')

    },
    resultados: function(req,res){
        db.usuarios.findAll(
            {
                where: [
                   {
                       email: 
                       {
                           [op.like]:"%" + req.query.buscador + "%"
                        }
                   }
                ],
            }
        )
        .then(function(email){
            if(email.length != 0){
                return res.render('ubuscador', {nombre: email})
                
            }
            db.usuarios.findAll(
                {
                    where: [
                        {
                            nombre_de_usuario: {[op.like]:"%" + req.query.buscador + "%"}
                        }
                    ]
                }
            )
        .then(function(nombre){
                return res.render('ubuscador', {nombre: nombre})
             })
        })
    
    }
}