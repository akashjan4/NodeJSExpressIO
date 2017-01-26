var questions =[
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred Programming langulage?"];
var answer =[];

function ask(indexQ)
{
process.stdout.write(`\n\n${questions[indexQ]}`);
process.stdout.write(" >  ");
}

process.stdin.on('data',function(arg){
//node will wait to for input
//process.stdout.write('\n'+arg.toString().trim()+"\n");
answer.push(arg.toString().trim());
if(answer.length <questions.length)
{
    ask(answer.length);
}
else{
    process.exit(0);
}
});

process.on('exit',function(){

    process.stdout.write("\n\n\n\n");
    process.stdout.write(`
    ${questions[0]}-> ${answer[0]}\n
    ${questions[1]}->${answer[1]} \n
    ${questions[2]}->${answer[2]}\n`);
    process.stdout.write("\n\n\n\n");

});

ask(0);

