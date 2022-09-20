const Contributor = require('../model/contributor')
const bcrypt = require("bcrypt")
const Blogpost = require('../model/blogpost')

exports.getLoginPage = (req,res)=>{
    res.render('login')
}

//to login check with all contributors in the database to find one that has that email and password before allowing access
exports.loginContributor =  async (req, res)=>{
    const allBlogposts = await Blogpost.find({ })
    const {email, password} = req.body

    Contributor.findOne({ email:email}, (error, contributor)=>{
        if(contributor){
            console.log(contributor);
            bcrypt.compare(password, contributor.password, (error, same)=>{
                if(same){
                    req.session.contributorId = contributor._id
                    req.session.surname = contributor.surname
                    req.session.firstname = contributor.firstname
                    console.log(req.session);
                    res.redirect('contributor')
                    console.log(`${req.session.contributorId = contributor._id} has logged in`);
                } else{
                    res.redirect('/login')
                }
            })
        } else {
            res.redirect('/login')
        }
    }) 
    
}