module.exports = {
    index: function(req,res){
        res.render('generos')

    },

    peliculasPorGenero: function(req,res){
        res.send('Pagina de peliculas del genero con id' + req.params)
    }
}