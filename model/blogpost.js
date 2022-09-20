const mongoose = require("mongoose")


const blogpostSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: [true, 'please add a Title to this Blog']
    },
    blogDetails: {
        type: String,
        required: true

    },
    contributorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contributor',
        required: true
    },
    datePosted:{
        type: Date,
        default:  new Date()
    },
    blogImage: String

});

const Blogpost = mongoose.model('Blogpost', blogpostSchema)

module.exports = Blogpost