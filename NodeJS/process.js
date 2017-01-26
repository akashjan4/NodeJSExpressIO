
var grab = function (flag) {
    var index = process.argv.indexOf(flag);
    return(index === -1) ? null : process.argv[index + 1];
}

var greeting =grab('--greeting');
var user =grab('--user');
if(!greeting || !user)
{
    console.log('Params are not provided');
}
else{
    console.log(`${user},${greeting} from nodeJS process.js module`);
}
/** process object is to collect all the information from the terminal, 
 * or command prompt, when the application starts. 
 * process.argv stands for process argument varibles used to start the process
 *  process module is also a global object
 * process.argv varible is an array. It containts the path to node and a path to process.js(this file)
 * console.log(process.argv); */