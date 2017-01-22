var express = require('express');
var router = express.Router();
router.get('/feedback', function (req, res) {
     res.render('feedback',{ title: "Feedback",
        id: "idFeedback",});
});
module.exports = router;