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

// router.get('/google/callback',
//   (req,res,next)=>{
//     passport.authenticate('google', { failureRedirect: '/auth/google/error' }, async (error, user , info) => {
//       if (error){
//         return res.send({ message:error.message });
//       }
//       if (user){
//         try {
//           //let result = await socialLogin(user.email); 
//           // here your business logic for login user.
//           return res.redirect("https://github.com/sanket-16/hackformers_techwarriors_10/tree/master/server");  
//         //   console.log(user);

//         } catch (error) {
//           return res.send({ message: error.message });
//         }
//       }
//     })(req,res,next);
//   }); 

router.get('/google/callback', passport.authenticate("google", { failureRedirect: "/" }), 
    function (req, res) { 
        // res.redirect('https://stackoverflow.com/questions/48376640/can-i-use-res-redirect-and-res-send-simultaneously-in-node-js', )
        res.status(201).json({user: req.user})
        console.log(req.user)

     })


router.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) { return next(error) }
        res.redirect('/')
    });
})

module.exports = router