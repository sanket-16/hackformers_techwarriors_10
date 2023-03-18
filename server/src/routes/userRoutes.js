const express = require('express');
const passport = require('passport')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>I am Inevitable</h1>")
})

router.get("/auth/google", passport.authenticate("google", ["profile", "email"]));

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

// router.get('/google/callback', passport.authenticate("google", { failureRedirect: "/" }), 
//     function (req, res) { 
//         res.redirect('/')
//         res.status(201).json({user: req.user})
//         console.log(req.user)
//      })

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);



router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});


router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

module.exports = router