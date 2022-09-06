const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', "ejs")

app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/add-blog', (req, res)=>{
    res.render('add-blog')
})
app.get('/blog', (req, res)=>{
    res.render('blog')
})
app.get('/contributor', (req, res)=>{
    res.render('contributor')
})
app.get('/login', (req, res)=>{
    res.render('login')
})
app.get('/register', (req, res)=>{
    res.render('register')
})
app.get('/admin', (req, res)=>{
    res.render('admin')
})







const PORT = 3000
app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`))
