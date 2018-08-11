'use strict'

const People = require('../model/people.model');

module.exports = {

   create(req, h) {
       const personData = {
           name: req.payload.name
       };
       return People.create(personData).then((person) => {
           return {
               message: 'Person created successfully',
               person: person
           };
       }).catch((err) => {
           return h.response({err: err}).code(400);
       });
   },
   find(req, h) {
        return People.find({}).then((people) => {
            return h.response(people);
        }).catch((err) => {
            return h.response({err: err}).code(404);
        });
   },
   findOne(req, h) {
       if (!req.params.id) {
            return h.response({err: 'id is required param'}).code(400);
       }
       return People.findById(req.params.id).then((person) => {
            return h.response(person);
       }).catch((err) => {
            return h.response({err: err}).code(404);
       });
   },
   update(req, h) {
       if (!req.params.id) {
           return h.response({err: 'id is required param'}).code(400);
       }
       let attributes = {};

       if (req.payload.name) {
           attributes.name = req.payload.name;
       }
       return People.findByIdAndUpdate(req.params.id, attributes, {new: true}).then((person) => {
           return h.response(person);
       }).catch((err) => {
            return h.response({err: err}).code(500);
       });
   },
   delete(req, h) {
       if (!req.params.id) {
           return h.response({err: 'id is required param'}).code(400);
       }
       return People.findByIdAndRemove(req.params.id).then((result) => {
           return h.response({msg: `person has deleted with id ${req.params.id}`});
       }).catch((err) => {
            return h.response({err: err}).code(500);
       });
   }
};

