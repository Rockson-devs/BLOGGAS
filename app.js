const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const aboutController = require('./controllers/aboutController')
const addABlogController = require('./controllers/add-a-blog-controller')
const adminController = require('./controllers/adminController')
const blogController = require('./controllers/blogController')
const contributorController = require('./controllers/contributorController')
const registerController = require('./controllers/registerController')
const loginController = require('./controllers/loginController')
const indexController = require('./controllers/indexController')


//connection to BLOGGAS DATABASE
mongoose.connect('mongodb://localhost/BLOGGASDB', {useNewUrlParser: true})

//Middlewares
app.set('view engine', "ejs")
app.use(express.static('public'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

app.get('/', indexController)
app.get('/about', aboutController)
app.get('/add-blog', addABlogController.getAddaBlogPage) //render add-blog page
app.post('/add-blog', addABlogController.createBlogPost) // send post to the server
app.get('/blog/:id', blogController) //render a single blog page
app.get('/contributor', contributorController)
app.get('/login', loginController.getLoginPage) // render login page
app.post('/login', loginController.loginContributor) //authenticate and login to the blog
app.get('/register', registerController.getRegisterPage) //render the page
app.post('/register', registerController.registerContributor)//send data to the server
app.get('/admin', adminController)







const PORT = 3000
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`))
