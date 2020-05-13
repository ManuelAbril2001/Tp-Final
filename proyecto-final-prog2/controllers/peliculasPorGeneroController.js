module.exports = {
    index: function(req,res){
        res.render('peliculasPorGenero')

    },

    peliculasPorGenero: function(req,res){
        res.render('peliculas')
    }

};
