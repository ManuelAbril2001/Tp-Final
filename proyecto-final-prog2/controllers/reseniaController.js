let db = require("../database/models")
//const bcrypt = require('bcryptjs');
let moduloLogin = require('../moduloLogin')

module.exports = {
    index: function(req,res){
        res.render("peliculas")
    },
    crear: (req,res) =>{

            moduloLogin.validar(req.body.email, req.body.contrasenia)
        
            .then(resultado => {
                db.resenias.create({
                    texto_resenia: req.body.texto_resenia,
                    puntaje: req.body.puntaje,
                    id_usuario: resultado.id,
                    id_pelicula: req.params.idPelicula
            
            })
            .then(function(index){
                return res.redirect('/peliculas?id='+ req.params.idPelicula)
            })
            .catch(function(error){
                return res.send(error);
            })
        })
    }
}