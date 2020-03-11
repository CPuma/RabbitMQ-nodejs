const mongoose = require('mongoose');
const { Document, Schema } = mongoose

const ContactSchema = new Schema({
    nombres: { type: String, required: true, },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    celular: { type: String, required: true }
})

const Contacts = mongoose.model('contacts', ContactSchema)

module.exports = Contacts