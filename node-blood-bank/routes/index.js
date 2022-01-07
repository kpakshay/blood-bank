var express = require('express');
var router = express.Router();
var bloodModule = require('../modules/bloodModule.js');

/* GET home page. */
// router.get('/getblood', bloodModule.getblood);


router.search('/', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    res.send("this search");
    });


module.exports = router;