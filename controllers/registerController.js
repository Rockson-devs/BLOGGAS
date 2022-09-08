const Contributor = require('../model/contributor')

exports.getRegisterPage = (req,res)=>{
    res.render('register')
}

exports.registerContributor = (req,res)=>{
    Contributor.create(req.body), (error, contributor)=>{
        console.log(error,  contributor);
    }
    res.redirect('contributor')
}