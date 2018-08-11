'use strict'

const Contact = require('../model/contact.model');

module.exports = {

    create(req, h) {
        const contactData = {
            person_id: req.payload.person_id,
            type: req.payload.type,
            value: req.payload.value,
        };
        return Contact.create(contactData).then((contact) => {
           return {
               message: 'Contact created successfully',
               contact: contact
           };
        }).catch((err) => {
           return h.response({err: err}).code(400);
        });
    },
    find(req, h) {
        return Contact.find({}).then((contacts) => {
            return h.response(contacts);
        }).catch((err) => {
            return h.response({err: err}).code(404);
        });
    },
    findOne(req, h) {
        if (!req.params.id) {
            return h.response({err: 'id is required param'}).code(400);
        }
        return Contact.findById(req.params.id).then((contact) => {
            return h.response(contact);
        }).catch((err) => {
            return h.response({err: err}).code(404);
        });
    },
    update(req, h) {
        if (!req.params.id) {
           return h.response({err: 'id is required param'}).code(400);
        }
        let attributes = {};

        if (req.payload.type) {
           attributes.type = req.payload.type;
        }
        if (req.payload.value) {
           attributes.value = req.payload.value;
        }
        return Contact.findByIdAndUpdate(req.params.id, attributes, {new: true}).then((contact) => {
           return h.response(contact);
        }).catch((err) => {
            return h.response({err: err}).code(500);
        });
    },
    delete(req, h) {
        if (!req.params.id) {
           return h.response({err: 'id is required param'}).code(400);
        }
        return Contact.findByIdAndRemove(req.params.id).then((result) => {
           return h.response({msg: `contact has deleted with id ${req.params.id}`});
        }).catch((err) => {
            return h.response({err: err}).code(500);
        });
    }
};

