let db = require("../database/models")
//const bcrypt = require('bcryptjs');
//let moduloLogin = require('../modulo-login')

let peliculasController = {
    index: function(req,res){
        res.render("peliculas")
    },
    crear: function (req,res) {
        db.resenias.create({
        texto_resenia: req.body.texto_resenia,
        puntaje: req.body.puntaje,
        id_pelicula: req.query.id

});

        res.redirect("/peliculas?id=" + req.params.id)
   
        // const hash = bcrypt.hashSync(req.body.password, 10); 
   
        /*  comparacion: function(req, res){
        moduloLogin.chequearUsuario(req.body.email)
        .then(resultado => {
            res.send('El email esta en la base de datos')
            res.render('login', {resultado:resultado})

            if (resultado == false){
                console.log('El email no esta en la base de datos');
            }
            else{
                console.log('El email esta en la base de datos');

                moduloLogin.buscarPorEmail(req.body.email)
                  .then(usuario =>{
                      console.log('objeto literal con datos')
                      console.log(req.body.password);
                      console.log(bcrypt.compareSync(req.body.password, usuario.pass));

                      if (bcrypt.compareSync(req.body.password, usuario.pass)){
                          res.send('Logueado con exito')
                      }
                      else {
                          res.send('Datos invalidos')
                      }
                  })
            }
        });  */

              
   

    }
              
}

module.exports = peliculasController



  /*  sequelize.query("SELECT*FROM resenias where id_pelicula =" + req.query.id )
        .then(function(resultados){
            let datos = resultados[0];

         res.render("peliculas", {datos:datos,movie_id:req.query.id});
         console.log(todo)


    } */