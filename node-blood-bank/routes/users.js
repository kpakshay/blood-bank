var express = require('express');
var router = express.Router();
var bloodModule = require('../modules/bloodModule.js');

router.post('/addblood', bloodModule.addblood);
router.get('/getblood', bloodModule.getblood);

module.exports = router;