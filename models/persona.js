const Sequelize = require('sequelize');

const Persona = (sequelize)=>{
    sequelize.define('Persona', {
        nombrePersona : Sequelize.STRING,
        edadPersona : Sequelize.INTEGER,
        colorOjosPersona : Sequelize.STRING
    });
}

module.exports = Persona;