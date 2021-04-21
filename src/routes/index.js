const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const hacksRoutes = require('./hacks')
const contactFormRoute = require('./contactForm');

router.get('/', (req, res) => {
    res.render('welcome')
})

router.use('/user', userRoutes)
router.use('/hacks', hacksRoutes)
router.use('/hacks/contactForm',contactFormRoute);

module.exports = router
