var express =require('express');
var parser = require('body-parser');
var router = express.Router();
var fileSystem = require('fs');

router.use(parser.json());
router.use(parser.urlencoded({extended:false}));
var feedback =require('../data/feedback.json');
router.get('/api', function (req, res) {
    res.json(feedback);
});

router.post('/api', function (req, res) {
feedback.unshift(req.body);
fileSystem.writeFile('app/data/feedback.json',JSON.stringify(feedback),function(err){
    console.log(err);
});
res.json(feedback);
});

router.post('/api/remove', function (req, res) {
 feedback.splice(req.body.id,1);
fileSystem.writeFile('app/data/feedback.json',JSON.stringify(feedback),function(err){
    console.log(err);
});
res.json(feedback);
 });
module.exports = router;