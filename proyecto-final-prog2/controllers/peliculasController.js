let db = require("../database/models")


module.exports = {
    index: function(req,res){
        db.resenias.findAll(
            {where:
                { id_pelicula: req.query.id}
            })
        .then(data =>{
            res.render("peliculas",{
                idPelicula: req.query.id,
                resenia: data
            })

        })
        
    },
}
   
   


              
   

    

   







