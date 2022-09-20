const Blogpost = require('../model/blogpost')

//this must be modified to display  only blogposts authored by the author who has logged in and only see all when he goes to index

module.exports = async(req,res)=>{
    const allBlogpostsByContributor = await Blogpost.find({ contributorID : req.session.contributorId }, function(err, results){}).populate('contributorID').clone()  //conditions set in the findOne method must be that it should be authored by that author. Find allblogsposts whose contributorID(i.e ID of contributor referenced from contributors) in the database is the same as the ID that has logged in

    res.render('contributor', {allBlogpostsByContributor: allBlogpostsByContributor})
}