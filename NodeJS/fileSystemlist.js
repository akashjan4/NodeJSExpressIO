var fileSystem = require('fs');

//var files = fileSystem.readdirSync("./");
/*
readdirSync will read file synchronously,
 but it will block nodeJS' single thread*/
 fileSystem.readdir("./",function(err,files){
     if(err)
     throw err;
     else
     {
     console.log("Done Reading");
     console.log(files);
     }

 });
     console.log("Reading...");
/*
readFileSync will read file synchronously,
 but it will block nodeJS' single thread*/
//var content = fileSystem.readFileSync('./core.js','UTF-8'); 

fileSystem.readFile('./core.js','UTF-8',function(err,content){
    if(err)
    throw err

    console.log(content);
});
console.log(`readeing content of core.js`);    