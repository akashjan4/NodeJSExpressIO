var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');
router.get('/speakers', function (req, res) {
    var thumbnails = [];
    var data = req.app.get('appData');
    data.speakers.forEach(function (item) {
        thumbnails = thumbnails.concat(item.artwork);
    });

    res.render('speakers', {
        title: "Speakers",
        id: "idSpeakrs",
        artwork: thumbnails,
        item:data.speakers
    });

    /* var info = "";
     dataFile = req.app.get('appData');
     dataFile.speakers.forEach(function (item) {
         info += `
          <link rel="stylesheet" type="text/css"
     href="/css/style.css"/>
         <ul>
         <li>
         <h1>${item.name}</h1>
     <img src="/images/speakers/${item.shortname}_tn.jpg"
     alt="speaker">
         <p>${item.summary} r</p>
         </li>
         </ul>
          <script src="/reload/reload.js"></script>
         `;
     });
 
     res.send(`
         ${info}
 `);*/
});
router.get('/speakers/:id', function (req, res) {
    if (req.params.id in dataFile.speakers) {
        //dataFile = req.app.get('appData');
        var speaker = dataFile.speakers[req.params.id];
        res.send(`
         <link rel="stylesheet" type="text/css"
    href="/css/style.css"/>
    <h1>${speaker.title}</h1>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg"
    alt="speaker">
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
     <script src="/reload/reload.js"></script>
    `);
    }
    else
        res.send("<h3>No match found</h3>");
});
module.exports = router;