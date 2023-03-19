const express = require('express');
const router = express.Router();
const {addTag} = require('../controller/tagController')

router.post('/tag', addTag)

module.exports = router