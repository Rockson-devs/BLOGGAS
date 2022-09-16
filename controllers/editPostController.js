const Blogpost = require('../model/blogpost')
const path = require('path')

//displays create a blog page 

// displays page for a single blogpost
exports.getEditPostPage = async (req,res) => {
    const singleBlogpost = await Blogpost.findById(req.params.id)
    console.log(singleBlogpost);
    res.render('editPost',{
        singleBlogpost : singleBlogpost
    })
}

// creates blog and displays all blogs by the contributor after adding the latest blog to it
exports.editBlogPost = async (req,res)=>{
    let singleBlogpost = await Blogpost.findById(req.params.id)
    console.log(singleBlogpost);
    let blogImage = req.files.blogImage
    blogImage.mv(path.resolve(__dirname,'..','public/images',blogImage.name), 
    async (error)=>{
        if(error){
        }
         await  Blogpost.findByIdAndUpdate( singleBlogpost,{
             ... req.body, 
             blogImage: '/images/' + blogImage.name}),(error, blogpost)=>{
        console.log(error, blogpost);
    }
        const allBlogposts = await Blogpost.find({}) 
        res.render('contributor',{                   
            allBlogposts: allBlogposts})
    }) 
}

