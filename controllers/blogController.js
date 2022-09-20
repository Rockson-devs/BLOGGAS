const Blogpost = require('../model/blogpost')

// displays page for a single blogpost
module.exports = async (req,res) => {
    const singleBlogpost = await Blogpost.findById(req.params.id).populate('contributorID')
    console.log(singleBlogpost);
    res.render('blog',{
        singleBlogpost : singleBlogpost
    })
}