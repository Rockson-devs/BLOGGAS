const Blogpost = require('../model/blogpost')

//this must be modified to display  only blogposts authored by the author who has logged in and only see all when he goes to index

module.exports = async(req,res)=>{
    const allBlogposts = await Blogpost.find({ })  //conditions set in the findOne method must be that it should be authored by that author
    res.render('contributor', {allBlogposts: allBlogposts})
}