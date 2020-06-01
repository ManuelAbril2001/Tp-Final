module.exports= function(sequelize, dataTypes) {
    
    let alias= "resenias";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

       id_pelicula: {
            type: dataTypes.INTEGER
       },

       id_usuario: {
            type: dataTypes.INTEGER
       },

       puntaje: {
           type: dataTypes.DECIMAL

       },

       texto_resenia: {
           type: dataTypes.STRING
       },

       fecha_creacion:{
           type: dataTypes.DATE
       },

       fecha_actualizacion:{
           type: dataTypes.DATE
       }
   
    
    };


    let config = {
            tableName: "resenias",
            timestamps: false
    };

    let resenias = sequelize.define(alias,cols, config);

    resenias.associate = function(models){
        resenias.belongsTo(models.usuarios, {

        as: 'usuario',
        foreignKey: 'id_usuario',


     });
    }

    return resenias;
}
