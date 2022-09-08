const mongoose = require('mongoose')

const contributorSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Contributor = mongoose.model('Contributor', contributorSchema )

module.exports = Contributor