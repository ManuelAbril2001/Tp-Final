module.exports = {
    index: function(req,res){
        res.render('peliculasPreferidas')

    },

    pelicula: function(req,res){
        res.send('Pagina de la pelicula con id' + req.params)
    }
}