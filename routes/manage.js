var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/mainpage', function (req, res, next) {
    res.render('mainpage/mainpage', { title: 'Express' });
});



/* GET member. */
router.get('/member/total', function (req, res, next) {
    res.render('member/total', { title: 'Express' });
});

router.get('/member/normal', function (req, res, next) {
    res.render('member/normal', { title: 'Express' });
});
router.get('/member/active', function (req, res, next) {
    res.render('member/active', { title: 'Express' });
});

router.get('/member/male', function (req, res, next) {
    res.render('member/male', { title: 'Express' });
});

router.get('/member/blackList', function (req, res, next) {
    res.render('member/blackList', { title: 'Express' });
});

router.get('/member/manager', function (req, res, next) {
    res.render('member/manager', { title: 'Express' });
});


/* GET newsletter. */
router.get('/newsletter', function (req, res, next) {
    res.render('newsletter/newsletter', { title: 'Express' });
});

/* GET posts. */
router.get('/posts', function (req, res, next) {
    res.render('posts/posts', { title: 'Express' });
});

/* GET order. */
router.get('/order', function (req, res, next) {
    res.render('order/order', { title: 'Express' });
});

module.exports = router;
