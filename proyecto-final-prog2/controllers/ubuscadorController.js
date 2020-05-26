const DB = require('../database/models')
const OP = DB.Sequelize.Op;

module.exports = {
    vista: function(req, res){
        res.render("ubuscador")
    }
}

