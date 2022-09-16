const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator')

const contributorSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: [true, 'Please provide a surname']
    },
    firstname: {
        type: String,
        required: [true, 'Please provide a firstname']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    }
});

contributorSchema.pre('save', function(next){
    const contributor = this

    bcrypt.hash(contributor.password, 10, (error, hash)=>{
        contributor.password = hash
        next()
    })
})
contributorSchema.plugin(uniqueValidator)

const Contributor = mongoose.model('Contributor', contributorSchema )

module.exports = Contributor