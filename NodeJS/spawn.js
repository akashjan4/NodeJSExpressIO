
//Not working as Expected
var spawn = require('child_process').spawn;

var childProcess = spawn("node",["timers"]);
childProcess.stdout.on('data',function(data){
console.log(`STDIN data-> ${data.toString().trim()}`);

});
childProcess.stdout.on('close',function(data){
console.log(`Stop-> ${data.toString().trim()}`);
});

setTimeout(function(){
   childProcess.stdin.write("STOP"); 
},10000)
/*var chatter = [
    "chatter 1",
    "chatter 2",
    "chatter 3",
    "chatter 4",
    "chatter 5",
    "chatter 6",
    "chatter 7",

];
var interval = setInterval(function(){
var i = Math.floor(Math.random()* chatter.length);
process.stdout.write(`${chatter[i]} \n`);

},1000);

process.stdin.on('data',function(data){
console.log(`STDIN data-> ${data.toString().trim()}`);
process.exit();
});*/