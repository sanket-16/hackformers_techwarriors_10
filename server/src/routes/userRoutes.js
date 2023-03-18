const express = require('express');
const passport = require('passport')
 const router = express.Router();

 router.get('/', (req, res) => {
    res.send("<h1>I am Inevitable</h1>")
})

 router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

 router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: "/"}),
(req, res)=>{
    res.redirect('/')
})

router.get('/logout', (req, res, next) => {
    req.logout((error)=>{
        if (error) {return next(error)}
        res.redirect('/')
    });  
})

module.exports= router