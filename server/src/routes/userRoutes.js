const express = require('express');
const { createProfile, byTags, byName } = require('../controller/profileRouter');
const { signin, signup } = require('../controller/userController');
const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/createprofile/:id',createProfile);
router.get('/bytag',byTags);
router.get('/byname',byName);

module.exports = router;