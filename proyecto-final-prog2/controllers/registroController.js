const DB = require('../database/models');
const OP = DB.Sequelize.Op;


module.exports = {
    index: function(req,res){
        res.render('registro')

    },
    validacion: function(req,res){
        res.render('index')

    }
}