'use strict'

const PeopleController = require('../controller/people.controller');
module.exports = [
    {
        path: '/api/people',
        method: 'POST',
        handler: PeopleController.create
    },
    {
        path: '/api/people',
        method: 'GET',
        handler: PeopleController.find
    },
    {
        path: '/api/people/{id}',
        method: 'GET',
        handler: PeopleController.findOne
    },
    {
        path: '/api/people/{id}',
        method: 'DELETE',
        handler: PeopleController.delete
    },
    {
        path: '/api/people/{id}',
        method: 'PUT',
        handler: PeopleController.update
    }
];
