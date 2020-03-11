
const Contact = require('../models/contact');
const _ = require('underscore');
const publishInQueue = require('../services/MQService')



const getContacts = async (req, res) => {

    const contacts = await Contact.find({});
    return res.status(200).json({ ok: true, data: { contacts } })
}
const createContact = async (req, res) => {
    try {
        const datosContact = _.pick(req.body, ['nombres', 'apellidos', 'email', 'celular'])
        let newContact = new Contact(datosContact);
        await newContact.validate()

        const publicar = publishInQueue('user-messages', `${newContact.nombres} bienvenido a nuestra red de contactos!`)
        const saveContact =  newContact.save({ validateBeforeSave: true }) 

        return Promise.all([saveContact, publicar]).then((resp) => {
            console.log(resp[0])
            console.log(resp[1])
            return res.status(200).json({ ok: true, data: { newContact } })
        }).catch(error => { console.log(error); return error })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, erro: { message: "Contacto Invalido" } })
    }


}

module.exports = { getContacts, createContact }

