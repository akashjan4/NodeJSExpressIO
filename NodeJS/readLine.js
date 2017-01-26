var readline = require('readline');
var _rl = readline.createInterface(process.stdin, process.stdout);
var real = {
    name: '',
    sayings: []
}
_rl.question("What is your name \n", function (data) {
    real.name = data;
    _rl.setPrompt(`what would you, ${real.name} say?\n`);
    //console.log(data);
    _rl.prompt();
    _rl.on('line', function (saying) {
        if (saying.toLowerCase().trim() === 'exit') {
            _rl.close();

        }
        else {
            real.sayings.push(saying.trim());
            _rl.setPrompt(`what  else would you, ${real.name} say? ('exit' to leave) \n `);
            _rl.prompt();

        }

    });
    _rl.on('close', function (closing){
        console.log("Thankyou %j", real);
        process.exit;
    });
});