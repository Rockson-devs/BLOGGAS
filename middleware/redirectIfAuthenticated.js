
//redirect a user to the homepage if he has already logged in
module.exports = (req, res, next)=> {
    if(req.session.contributorId){
        return res.redirect('/') 
    }
        next()
}