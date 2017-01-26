var waitTime = 3000;
var curretTime = 0;
var waitInterVal = 500;
var _clearInterval;
var percentWaited = 0;
function writeProgress(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`wating..${p}% \n`);
}
setTimeout(function () {
    console.log("done");
    writeProgress(100);
    clearInterval(_clearInterval);//clear interval after 3 seconds
}, waitTime);
_clearInterval = setInterval(function () {
    curretTime += waitInterVal;
    percentWaited = Math.floor((curretTime / waitTime) * 100);
    writeProgress(percentWaited);
    console.log(`wait interval ${curretTime / 1000} seconds...`);

}, waitInterVal);

process.stdout.write(`\n\n\n`);
writeProgress(percentWaited);
