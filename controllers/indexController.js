const Blogpost = require('../model/blogpost')
// const Contributor = require('../model/contributor')

module.exports = async (req, res)=>{
        const allBlogposts = await Blogpost.find({})
        console.log(req.session);
        res.render('index', { 
            allBlogposts
    })
}