
//  Do You Know Me
var readLineSync = require("readline-sync");
var chalk = require("chalk");

var que = chalk.red;
var ans = chalk.green;
var head = chalk.bold.yellowBright;
var won = chalk.bold.blackBright;
var scoreColor = chalk.bold.red;


/* var friendsMsg = {
    name: [],
    msg: [],
} */

var score = 0;
var highScore = {
    name: ["Priyanshu"],
    score: ["50"],
}

var questions = [
    {
        question:"Where you can find me Most of the Time? ",
        option:["Discord", "Instgram", "facebook" ] , 
        answer:["Discord"],
    },
    {
        question:"Where do I Live(state)? ", 
        option:["Chandigarh", "Punjab", "UP" ] , 
        answer:["UP"],
    },
    {
        question:"Which color I like? ",
        option:["Black", "Red", "Pink" ] ,  
        answer:["Red"],
    },
    {
        question:"Which Laptop I have? ", 
        option:["Mac", "Dell", "HP" ] , 
        answer:["Dell"],
    },
    {
        question:"Which game we played alot: ",
        option:["MineCraft", "FreeFire", "pubg" ] ,  
        answer:["pubg"],
    },
];


console.log(head("***** Welcome to Quiz " + " DO YOU KNOW ME *****"));
var friend = readLineSync.question(que("What's your name? "));
console.log(head("hey! Welcome "+ ans(friend.toLocaleUpperCase())));
console.log("---------------------");
console.log(ans(friend.toLocaleUpperCase() +" let's see how much you Know me "));
console.log("---------------------");


function play(question,option, answer){

    console.log(que(question));
    var userAnswer = readLineSync.keyInSelect(option,{
        hideEchoBack: true,
        mask: '*',
    });
    if(option[userAnswer] === answer[0]){
        console.log(ans("You are Right! you scored! "));
        score =  score+10;
    }else{
        console.log(que("NAHH!" + " Answer is: "+ ans(answer[0])));
    }   
    console.log("-------------------");
}

function game(){
    for(var i = 0; i< questions.length; i++){
        var currentQuestion = questions[i];
        play(currentQuestion.question,currentQuestion.option ,currentQuestion.answer);
    }
    console.clear()
}

function showScore(){

    if(score >= 40){
        console.log();
        console.log(won("Hey! Great Job " + friend +" you Know me "));
        console.log(scoreColor(("your Total Score is: "+ score)));
        highScore.name.push(friend);
        highScore.score.push(score);

    }else{
        console.log();
        console.log(scoreColor("hey! your Total Score is: "+ score));
    }
    console.log("---------------------");
    console.log(ans("Check LeaderBoard! You also Can be in leaderboard..."));
    console.log();
    var arrLength = highScore.name.length;
    for(var i =0; i<arrLength; i++){
        console.table(que(highScore.name[i] + ":" + highScore.score[i] ));
    }
}

/* function saySomething(){
    var secret = readLineSync.question('Please whisper sweet words: ',{
        hideEchoBack: true,
        mask: require('chalk').magenta('\u2665')
      });
    friendsMsg.msg.push(secret);
    friendsMsg.name.push(friend);
} */

game();
console.clear()
showScore();
/* saySomething(); */
