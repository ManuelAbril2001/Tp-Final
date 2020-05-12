module.exports = {
    index: function(req,res){
        res.render('peliculasFavoritas')

    },

    pelicula: function(req,res){
        res.send('Pagina de la pelicula con id' + req.params)
    }
}