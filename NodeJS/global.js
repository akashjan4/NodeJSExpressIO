var pathModule = require('path');//require is also a global object
var hello ="Hello World"; //local variable for module
console.log(`${hello}`);
global.console.log(`Console is a global object ,say ${hello}`);//console is available in global object
console.log(__filename); //name of file with full path
console.log(__dirname);//name of directory, excluding file path
console.log(pathModule.basename(__filename));//extract the file name;