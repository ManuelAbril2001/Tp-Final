/* module.exports= function(sequelize, dataTypes) {

    let alias= "usuarios";

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },

       Nombre_de_Usuario: {
            type: dataTypes.INTEGER
       },

       Email: {
            type: dataTypes.INTEGER
       },

       contrasenia: {
            type: dataTypes.STRING

       },

    }
}

let config = {
            tableName: "usuarios",
            timestamps: false
    }

 let usuario = sequelize.define(alias,cols, config);

 usuario.associate = function(models){
    usuario.hasMany(models.resenias, {

        as: 'resenias',
        foreignKey: 'id_usuario'

    });

    return usuario;
}

 */

 module.exports= function(sequelize, dataTypes) {
    
   let alias = "usuarios"
 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        
        },

        email:{
            type: dataTypes.STRING
        },

        contrasenia:{
            type: dataTypes.STRING
        },

        nombre_de_usuario:{
            type: dataTypes.STRING
        }


    };

    let config= {
        tableName: "usuarios",
        timestamps: false
    }



    let usuarios = sequelize.define(alias,cols,config);

    return usuarios;

 }



/*     usuarios.associate = function(models){
        usuarios.belongsTo(models.resenias, {

        as: 'resenia',
        foreignKey: 'id_usuario',


     });
    } */

 





