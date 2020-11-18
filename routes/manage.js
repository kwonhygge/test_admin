var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/mainpage/main', function (req, res, next) {
    res.render('mainpage/main', { title: 'Express' });
}); 

router.get('/mainpage/rolling-banner', function (req, res, next) {
    res.render('mainpage/rolling-banner', { title: 'Express' });
}); 
router.get('/mainpage/program&goods', function (req, res, next) {
    res.render('mainpage/program-goods', { title: 'Express' });
}); 
router.get('/mainpage/add-goods', function (req, res, next) {
    res.render('mainpage/add-goods', { title: 'Express' });
}); 
router.get('/mainpage/add-program', function (req, res, next) {
    res.render('mainpage/add-program', { title: 'Express' });
}); 
router.get('/mainpage/notice&newsletter', function (req, res, next) {
    res.render('mainpage/notice-newsletter', { title: 'Express' });
});
router.get('/mainpage/add-notice', function (req, res, next) {
    res.render('mainpage/add-notice', { title: 'Express' });
}); 
router.get('/mainpage/add-newsletter', function (req, res, next) {
    res.render('mainpage/add-newsletter', { title: 'Express' });
}); 
router.get('/mainpage/youtube&column', function (req, res, next) {
    res.render('mainpage/youtube-column', { title: 'Express' });
}); 
router.get('/mainpage/add-youtube', function (req, res, next) {
    res.render('mainpage/add-youtube', { title: 'Express' });
}); 
router.get('/mainpage/add-column', function (req, res, next) {
    res.render('mainpage/add-column', { title: 'Express' });
}); 
router.get('/mainpage/rolling-review', function (req, res, next) {
    res.render('mainpage/rolling-review', { title: 'Express' });
}); 
router.get('/mainpage/add-banner', function (req, res, next) {
    res.render('mainpage/add-banner', { title: 'Express' });
});
router.get('/mainpage/add-review', function (req, res, next) {
    res.render('mainpage/add-review', { title: 'Express' });
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

/* GET board. */
router.get('/board/notice&news', function (req, res, next) {
    res.render('board/notice-news', { title: 'Express' });
});
router.get('/board/introduction', function (req, res, next) {
    res.render('board/introduction', { title: 'Express' });
});
router.get('/board/youtube', function (req, res, next) {
    res.render('board/youtube', { title: 'Express' });
});
router.get('/board/column', function (req, res, next) {
    res.render('board/column', { title: 'Express' });
});
router.get('/board/FAQ', function (req, res, next) {
    res.render('board/faq', { title: 'Express' });
});
router.get('/board/terms', function (req, res, next) {
    res.render('board/terms', { title: 'Express' });
});


router.get('/board/add-notice-news', function (req, res, next) {
    res.render('board/add-notice-news', { title: 'Express' });
});
router.get('/board/add-intro-member', function (req, res, next) {
    res.render('board/add-intro-member', { title: 'Express' });
});
router.get('/board/add-column-content', function (req, res, next) {
    res.render('board/add-column-content', { title: 'Express' });
});
router.get('/board/add-faq-content', function (req, res, next) {
    res.render('board/add-faq-content', { title: 'Express' });
});
router.get('/board/add-terms-content', function (req, res, next) {
    res.render('board/add-terms-content', { title: 'Express' });
});
router.get('/board/add-youtube-content', function (req, res, next) {
    res.render('board/add-youtube-content', { title: 'Express' });
});




/* GET order. */
router.get('/order', function (req, res, next) {
    res.render('order/order', { title: 'Express' });
});

module.exports = router;
