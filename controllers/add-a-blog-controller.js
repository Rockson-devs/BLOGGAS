const Blogpost = require('../model/blogpost')

//displays create a blog page 

exports. getAddaBlogPage = (req, res)=>{
    res.render('add-blog')
}
// creates blog and displays all blogs by the contributor after adding the latest blog to it
exports.createBlogPost = async(req,res)=>{
    Blogpost.create(req.body),(error, blogpost)=>{
        console.log(error, blogpost);
    }
    const allBlogposts = await Blogpost.find({}) 
    res.render('contributor',{                   
        allBlogposts: allBlogposts})
}