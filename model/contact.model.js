'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    person_id: {
        required: true,
        type: Schema.Types.ObjectId
    },
    type: {
        required: true,
        type: String
    },
    value: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Contact', ContactSchema);
