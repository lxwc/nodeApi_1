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
    id: 2
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油开心，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'home.jpg',
    id: 3
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 4
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 5
}, {
    title: '酱油，耗油，植物油',
    dec: '酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油酱油，耗油，植物油',
    url: 'photo.jpg',
    id: 6
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
            id: i + 7
        }
        list.push(item);
    }
    res.send(list);
});

router.get('/detail', function(req, res, next) {
    // var id = req.param.id;
    list.forEach(ele => {
        if (ele.id == req.query.id) {
            res.send(ele);
        }
    });
});

router.get('/search', function(req, res, next) {
    var searchVaule = req.query.searchValue;
    var searchList = [];
    list.forEach(ele => {
        if (ele.title.indexOf(searchVaule) > 0 || ele.dec.indexOf(searchVaule) > 0) {
            searchList.push(ele);
        }
    });
    res.send(searchList);
});

module.exports = router;