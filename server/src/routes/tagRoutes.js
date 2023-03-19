const express = require('express');
const router = express.Router();
const { addTag, getTags } = require('../controller/tagController');

router.post('/tag', addTag);
router.get('/tag', getTags);

module.exports = router;
