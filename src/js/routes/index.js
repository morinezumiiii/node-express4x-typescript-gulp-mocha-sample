var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.get('/:msg', function (req, res, next) {
    res.render('index', {
        title: 'Expresss'
    });
});
module.exports = router;
