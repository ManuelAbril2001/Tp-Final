module.exports= function(sequelize, dataTypes) {

    let alias= "resenias";
    
    let cols = {

        id: {
            type: dataTypes.int,
            primaryKey: true,
            autoIncrement: true,
        },

       id_pelicula: {
            type: dataTypes.varchar
       },

       id_usuario: {
            type: dataTypes.int
       },

       fecha_actualizacion:{

        type: dataTypes.timestamps
       },

       fecha_creacion:{

        type: dataTypes.timestamps
       },

       puntaje_pelicula_serie: {
           type: dataTypes.decimal

       },

       texto_resenia: {
           type: dataTypes.varchar
       }
    
    };


    let config = {
            tableName: "resenias",
            timestamps: true
    };

    let resenias = sequelize.define(alias,cols, config);

    resenias.associate = function(models){
        resenias.belongsTo(models.usuario, {

        as: 'usuario',
        primaryKey: 'id_usuario',


     });
    }

    return resenias;
}
