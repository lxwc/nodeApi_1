var express = require('express');
var router = express.Router();

var list = [{
    title: '什么时候最适合吃水果',
    dec: '你开心的时候都可以吃水果，想吃什么 就吃什么，这样的答案你喜欢吗，喜欢记得多吃点水果，takeyi',
    url: 'photo.jpg',
    id: 0
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 1
}];



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
    for (var i = 0; i < 20; i++) {
        var item = {
            title: '酱油，耗油，植物油',
            dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
            url: 'photo.jpg',
            id: i
        }
        list.push(item);
    }
    res.json({
        err_code: 200,
        msg: list
    });
});
module.exports = router;