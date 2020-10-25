var express = require('express');
var router = express.Router();

/* GET mainpage page. */
router.get('/', function (req, res, next) {
    res.render('mainpage/mainpage', { title: 'Express' });
});


module.exports = router;
