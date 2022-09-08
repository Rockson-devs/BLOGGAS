const Contributor = require('../model/contributor')
const bcrypt = require("bcrypt")

exports.getLoginPage = (req,res)=>{
    res.render('login')
}

//to login check with all contributors in the database to find one that has that email and password before allowing access
exports.loginContributor =  async (req, res)=>{
    const {email, password} = req.body

    Contributor.findOne({ email:email}, (error, contributor)=>{
        if(contributor){
            bcrypt.compare(password, contributor.password, (error, same)=>{
                if(same){
                    res.render('contributor')
                    console.log(`${req.session.contributorId = contributor._id} has logged in`);
                } else{
                    res.redirect('/login')
                }
            })
        } else {
            res.redirect('/register')
        }
    }) 
    
}