const Blogpost = require('../model/blogpost')
const path = require('path')

//displays create a blog page 

exports.getAddaBlogPage = (req, res)=>{
    res.render('add-blog')
}
// creates blog and displays all blogs by the contributor after adding the latest blog to it
exports.createBlogPost = (req,res)=>{
    let blogImage = req.files.blogImage
    blogImage.mv(path.resolve(__dirname,'..','public/images',blogImage.name), 
    async (error)=>{
        if(error){
        }
         await  Blogpost.create({
             ... req.body, 
             blogImage: '/images/' + blogImage.name}),(error, blogpost)=>{
        console.log(error, blogpost);
    }
        const allBlogposts = await Blogpost.find({}) 
        res.render('contributor',{                   
            allBlogposts: allBlogposts})
    }) 
}
