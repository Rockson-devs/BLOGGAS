const Contributor = require('../model/contributor')

module.exports = (req, res, next)=> {
    Contributor.findById(req.session.contributorId, (error, user)=>{
        if(error||!user)
        return res.redirect('/')

        next()
    })
}