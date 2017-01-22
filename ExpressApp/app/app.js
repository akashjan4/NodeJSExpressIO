//Step 2 (After Express)
var express = require('express');
var reload = require('reload');
var io = require('socket.io')();
var app = express();

//Step 3 Add Data(local json file)
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);//Available throughtout the application
var server = app.listen(app.get('port'), function () {
    console.log("listening to port  %s; link http://localhost:%s", app.get('port'), app.get('port'));
});

io.attach(server);
io.on('connection', function (socket) {
    socket.on('postMessage', function (data) {
        io.emit('updateMessage', data)
    });
});

app.locals.siteCommon = { author: 'Akash' }; //global veriable
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('app/public'));
app.use(require('./route/default'));
app.use(require('./route/speakers'));
app.use(require('./route/feedback'));
app.use(require('./route/getapi'));
app.use(require('./route/chat'));
reload(server, app); 




//step 4: Separate out route
//step 5: create public folder

/*
//Step 1(Before Express)
var http = require('http');
var myServer = http.createServer(function (req, res) {
    res.writeHead("200", { "content-type": "text/html" });
    res.write("<h1>Response de server</h1>");
    res.end();
});
myServer.listen(3000);
console.log("listening to http://localhost:3000");
*/
