const mongoose = require('mongoose');
const config = require('./configs/app.config')
const conexionOPT = { useUnifiedTopology: true, useNewUrlParser: true }
const URI_DB =  config.MONGODB.URI
const conexionDB = async () => {
    return mongoose.connect(URI_DB, conexionOPT).then(e => {
        console.log("Mongo Conectado")
    }).catch(err => {
        console.log(err);
        console.log("Nop se puedo conectar a la BASE DE DATOS")
        process.exit(1);
    })
}

module.exports = conexionDB
