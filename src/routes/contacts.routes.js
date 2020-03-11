const express = require('express');
const router = express.Router()

const contactsController = require('../controllers/contacts.controller')

router
    .get('', contactsController.getContacts)
    .post('', contactsController.createContact)

module.exports = router