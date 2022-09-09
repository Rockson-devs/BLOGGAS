const Blogpost = require('../model/blogpost')

module.exports = async (req, res)=>{
const allBlogposts = await Blogpost.find({})
    res.render('index', 
    { allBlogposts : allBlogposts})
}