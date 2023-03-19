const express = require('express');
const { createProfile } = require('../controller/profileRouter');
const { signin, signup } = require('../controller/userController');
const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/createprofile/:id',createProfile);

module.exports = router;