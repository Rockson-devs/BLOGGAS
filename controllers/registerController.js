const Contributor = require('../model/contributor')

exports.getRegisterPage = (req,res)=>{
    var surname = ""
    var firstname = ""
    var email = ""
    var password = ""
    const data = req.flash('data')[0];

    if (typeof data != "undefined"){
        surname = data.surname
        firstname = data.firstname
        email = data.email
        password = data.password
    }
    res.render('register',{
        errors: req.flash('validationErrors'),
        // surname = surname,
        // firstname = firstname,
        // email = email,
        // password = password,
    })
}

exports.registerContributor = (req,res)=>{
    Contributor.create(req.body, (error, contributor)=>{
        if(error){
            const validationErrors = Object.keys(error.errors).map(key=> error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
             return res.redirect('/register')
        } 
        res.redirect('/contributor')
    })
}
