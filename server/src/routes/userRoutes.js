const express = require('express');
const passport = require('passport')
 const router = express.Router();

 router.get('/', (req, res) => {
    res.send("<h1>I am Inevitable</h1>")
})

 router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//  router.get('/google/callback',passport.authenticate('google', {failureRedirect: "/"}),
// (req, res)=>{
    
//     res.redirect('/')
// })

router.get('/google/callback',
  (req,res,next)=>{
    passport.authenticate('google', { failureRedirect: '/auth/google/error' }, async (error, user , info) => {
      if (error){
        return res.send({ message:error.message });
      }
      if (user){
        try {
          //let result = await socialLogin(user.email); 
          // here your business logic for login user.
          return res.send({
            user,
            message:'Login Successful' 
          });
        } catch (error) {
          return res.send({ message: error.message });
        }
      }
    })(req,res,next);
  }); 


router.get('/logout', (req, res, next) => {
    req.logout((error)=>{
        if (error) {return next(error)}
        res.redirect('/')
    });  
})

module.exports= router