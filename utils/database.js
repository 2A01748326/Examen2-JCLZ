//Configuracion de sequelize
const Sequelize = require('sequelize');
//const {applyRelations} = require('./relations');
//Objeto de conexion
const sequelize = new Sequelize('examenJCLZ', 'admin', 'myfreegame1', {
    dialect:'mysql', 
    host:'database-1.cm2gcyurohy1.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Caracteristicas especiales de la conexion
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true,
    }
});
//Cargar los modelos 
const modelDefiners = [
    require('../models/persona'),
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}
/*
//Generar las relaciones entre las tablas
applyRelations(sequelize);
*/
//Exportar el objeto sequelize
module.exports = sequelize;
