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
    blogImage: String

});

const Blogpost = mongoose.model('Blogpost', blogpostSchema)

module.exports = Blogpost