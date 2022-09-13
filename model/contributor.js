const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

contributorSchema.pre('save', function(next){
    const contributor = this

    bcrypt.hash(contributor.password, 10, (error, hash)=>{
        contributor.password = hash
        next()
    })
})

const Contributor = mongoose.model('Contributor', contributorSchema )

module.exports = Contributor