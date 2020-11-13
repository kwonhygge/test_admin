var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/mainpage', function (req, res, next) {
    res.render('mainpage/mainpage', { title: 'Express' });
});



/* GET member. */
router.get('/member/1', function (req, res, next) {
    res.render('member/tab1', { title: 'Express' });
});

router.get('/member/2', function (req, res, next) {
    res.render('member/tab2', { title: 'Express' });
});
router.get('/member/3', function (req, res, next) {
    res.render('member/tab3', { title: 'Express' });
});

router.get('/member/4', function (req, res, next) {
    res.render('member/tab4', { title: 'Express' });
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
