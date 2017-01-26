//Child process module
//Exceute external command
var exec = require('child_process').exec;
var _clrInterval, _timeCounter = -1, progress = "█", progressText = "█";;
var progressbar = new Array(10);
progressbar.fill('.');
console.log("Opening LinkedIn in your Default Browser");
var timeProgress = function (param) {
    progressbar[param] = "█";
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    progress += progress;
    //  progressbar.forEach(function(d,i){
    //     progressText =d+""+d;
    // });
    //var secPural = (param===1)&&'step'||'steps';
    process.stdout.write(`[${progress}]`);
    //process.stdout.write(`[${progressbar}]`);

    //process.stdout.write(`Opening Linked in Default Browser in ${param} ${secPural}`);
}

_clrInterval = setInterval(function () {
    timeProgress(_timeCounter += 1);
}, 1000);


setTimeout(function () {
    exec('start https://linkedin.com');//command may vary in OSX
    timeProgress(10);
    clearInterval(_clrInterval);
    process.stdout.clearLine();
    exec('cls');
    exec('git version');
    exec('dir', function (error, stdout) {
        if (error) {
            throw error;
        }
        console.log("Listing Finish");
        console.log(stdout);
    });
}, 3000);
