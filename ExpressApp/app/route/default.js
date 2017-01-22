var express =require('express');
var router = express.Router();
router.get('/', function (req, res) {
    //default route
    var thumbnails =[];
    var data=req.app.get('appData');
    data.speakers.forEach(function(item){
  thumbnails=   thumbnails.concat(item.artwork);
    });

res.render('default',{
    title:"Home",
    id:"idHome",
    artwork:thumbnails,
   
});

   /* res.send(`
    <link rel="stylesheet" type="text/css"
    href="css/style.css"/>
    <h1>Welcome to Home </h1>
    <img src="/images/misc/background.jpg"
    alt="background" style="height:300px;"/>
    <script src="/reload/reload.js"></script>
`);*/
});
module.exports =router;