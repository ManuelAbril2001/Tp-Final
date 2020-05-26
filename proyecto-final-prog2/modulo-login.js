let db = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuarios) {
            return usuarios != null;
        })
    },

    buscarPorEmail: function (email){
        return db.usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.usuarios.findOne({
            where:{
                email:email,
                contrasenia: pass
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;