const express = require('express')
const path = require('path')
const {index, single, project,about,blog,contact,main,service,err} = require('../controllers/defaultController')
const router = express.Router()



// const router = express.Router()
// const adminData = require('../controllers/defaultController')


router.get('/',index) 

router.get('/single', single)

router.get('/project', project)

router.get('/about', about)

router.get('/blog', blog)

router.get('/contact', contact)

router.get('/main', main)

router.get('/service', service)

router.get('/404',err)



module.exports = router

