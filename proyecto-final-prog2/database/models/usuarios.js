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
        },

        fecha_de_nacimiento:{
            type: dataTypes.DATE
        }


    };

    let config= {
        tableName: "usuarios",
        timestamps: false
    }



    let usuarios = sequelize.define("usuarios",cols,config);

    usuarios.associate = function(models){
        usuarios.hasMany(models.resenias, {
    
            as: 'resenias',
            foreignKey: 'id_usuario'
    
        });
    
     
    }

    return usuarios;

 }



/*     usuarios.associate = function(models){
        usuarios.belongsTo(models.resenias, {

        as: 'resenia',
        foreignKey: 'id_usuario',


     });
    } */

 





