const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const defaultRoute = require('./routes/defaultRoutes')
const ejs = require('ejs')


const app = express()
app.set('view engine', 'ejs') //defining templating engine
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))





app.use('/', defaultRoute)

app.use((req, res, next) => {
    res.render('404.ejs')
})



app.listen(3000)