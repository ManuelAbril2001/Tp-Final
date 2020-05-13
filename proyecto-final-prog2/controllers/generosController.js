module.exports = {
    index: function(req,res){
        res.render('generos')

    },

    peliculasPorGenero: function(req,res){
        res.render('peliculasPorGenero')
    },
}