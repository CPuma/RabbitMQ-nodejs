// Cargamos Variables de Entorno
require('dotenv').config()

// cargamos la APP de Express
const app = require('./app')

// Configuracion
const config = require('./configs/app.config')

// conectamos a MongoDB
const conexionDB = require('./database');

app.listen(config.SERVER.PORT, async () => {
    console.log("Server Corriendo en el puerto " + config.SERVER.PORT);
    await conexionDB();
})

process.on('exit', () => {
    console.log("Terminando el proceso")
})