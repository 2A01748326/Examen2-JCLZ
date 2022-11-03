// Importar las bibliotecas
const  express = require('express');

const sequelize = require("./utils/database");
const path = require('path');
const personaRoutes = require('./routes/persona');

const app = express(); //Crear la aplicacion de express y la guardamos en app


//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/persona',personaRoutes);

sequelize.sync()
    .then(()=>{
        console.log("Conexion exitosa");
        //Lanzar la aplicacion
        app.listen(8080, ()=>{
            console.log('Servidor en linea');
        });//Los parametros son el puerto donde funcionara y el callback (arrowFnct)
    }).catch(error=>console.log(error));