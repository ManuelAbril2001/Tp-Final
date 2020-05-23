let db = require("../database/models")

let peliculasController = {
    index: function(req,res){
        res.render("peliculas")
    },

    crear: function (req,res) {
        db.resenia.create({
            texto_resenia: req.body.texto_resenia,
            puntaje: req.body.puntaje,
            id_pelicula: req.query.id
          
            });

        res.redirect("/peliculas?id=" + req.params.id)
   

    }

}

module.exports = peliculasController



  /*  sequelize.query("SELECT*FROM resenias where id_pelicula =" + req.query.id )
        .then(function(resultados){
            let datos = resultados[0];

         res.render("peliculas", {datos:datos,movie_id:req.query.id});
         console.log(todo)


    } */