// Imports
const express = require('express')
const morgan = require('morgan')
const contactsRoutes = require('./routes/contacts.routes')

// Initialization
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, inflate: false }))
app.use(morgan('dev'))

// Routes
app.use('/api/contacts', contactsRoutes)
app.use('/', (req, res) => { return res.send("Api Funcionando") })

module.exports = app