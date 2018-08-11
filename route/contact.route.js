'use strict'

const ContactController = require('../controller/contact.controller');
module.exports = [
    {
        path: '/api/contact',
        method: 'POST',
        handler: ContactController.create
    },
    {
        path: '/api/contact',
        method: 'GET',
        handler: ContactController.find
    },
    {
        path: '/api/contact/{id}',
        method: 'GET',
        handler: ContactController.findOne
    },
    {
        path: '/api/contact/{id}',
        method: 'DELETE',
        handler: ContactController.delete
    },
    {
        path: '/api/contact/{id}',
        method: 'PUT',
        handler: ContactController.update
    }
];
