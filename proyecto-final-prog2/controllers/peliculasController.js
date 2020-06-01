let db = require("../database/models")


module.exports = {
    index: function(req,res){
        db.resenias.findAll(
            {where:
                { id_pelicula: req.query.id},
                include:{
                    association:"usuario"
                }
            })
        .then(data =>{
            res.render("peliculas",{
                idPelicula: req.query.id,
                resenia: data
            })

        })
        .catch(e => console.log(e))
        
    },
}
   
   


              
   

    

   







