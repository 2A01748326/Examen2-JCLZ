 const path = require("path");
 const Persona = require('../utils/database').models.Persona;
 const sequelize = require('../utils/database');
 const Sequelize = require("sequelize"); //Lib de node modules

exports.postAltaPersona = (req, res)=>{
    console.log(req.body); //los post van en el body
    //INSERT INTO Consola VALUES ( )
    Persona.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso");//Cliente
        })
        .catch(error=>{
            console.log(error);//Servidor
            res.send("Ocurrio un error!")//Cliente
        });

    //res.json({estado:"Existoso"});
}
exports.getPersona = (req, res)=>{
    //SELECT * from Consola;
    Persona.findAll()
        .then(consolas =>{
            console.log("Consolas", consolas);
            res.send(consolas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        });
}

