const express = require('express');
const { createProfile, updateProfile } = require('../controller/profileController');
const router = express.Router();

router.post("/create",createProfile);
router.put("/update/:id",updateProfile);

module.exports = router