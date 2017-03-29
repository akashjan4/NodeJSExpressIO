"use strict";
var express = require("express");//1
var app = express();//2

var products = [{id:14244, name:"Apple iPhone6s",price:"240$"},
{id:15444, name:"Apple iPhone7",price:"440$"},
{id:98244, name:"Samsung Galaxy 7",price:"290$"},
{id:14244, name:"OnePlus 3T",price:"210$"},
{id:14244, name:"Rubic cube",price:"5$"}
];

/*
 * This is custome middleware
 * So whenever we have a request, the app will use our custom piece of middleware. So whenever we have our request, now the application will first use our middleware function, and then it will proceed on to the express.static middleware.
 */ 
app.use(function (req,res,next) {
    console.log(`${req.method} request for '${req.url}'`);
next();
});
app.use(express.static("./public")); //3- Add middleware and point to folder/file having static content.

app.get("/api/productslist",function(req,res){
    res.json(products);
})

const portID = 9000;
app.listen(portID); //4- listen to port localhost port 9000;
console.log("Port 9000");

module.exports = app; //not mendetory but good idea to do so. 

