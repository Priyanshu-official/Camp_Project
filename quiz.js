
//  Do You Know Me
var readLineSync = require("readline-sync");
var chalk = require("chalk");
const { level } = require("chalk");

var que = chalk.red;
var ans = chalk.green;
var head = chalk.bold.yellowBright;
var won = chalk.bold.blackBright;
var scoreColor = chalk.bold.red;


/* var friendsMsg = {
    name: [],
    msg: [],
} */

var check = 0;
var score = 0;
var highScore = {
    name: ["Priyanshu"],
    score: ["100"],
}

var questionsSetOne = [
    {
        question:"What does Thanos want?",
        option:["To kill as many people as he can",
                "To restore balance to the universe",
                "To put an end to the Avengers",
                "To save his home planet"] , 
        answer:["To restore balance to the universe"],
    },
    {
        question:"Who is the first Avenger?", 
        option:["Iron Man",
                "Captain Marvel", 
                "Nick Fury",
                "Captain America",] , 
        answer:["Captain America"],
    },
    {
        question:"Who is Thor's father?",
        option:["Odin","Loki","Hela","Surtur",] ,  
        answer:["Odin"],
    },
    {
        question:"On what planet do the Guardian of the Galaxy meet?", 
        option:["Knowhere", "Nidavellir", "Xandar","Earth"] , 
        answer:["Xandar"],
    },
    {
        question:"Which infinity stone does Vision keep safe in his forehead? ",
        option:["Reality", "Power", "Mind", "Time" ] ,  
        answer:["Mind"],    
    },
];

var questionsSetTwo = [
    {
        question:'Where are the heroes in "Ant Man and the Wasp" trying to get to',
        option:["Titan", "Avengers Tower", "The Quantum realm","Knowwhere"] , 
        answer:["The Quantum realm"],
    },
    {
        question:'What gives the Black Panther his powers?',
        option:["The Heart Shaped Herb", "His suit", "The vibranium","He was born with them"] , 
        answer:["The Heart Shaped Herb"],
    },
    {
        question:"What does FRIDAY, Tony's new A.I. after JARVIS, call Tony?",
        option:["Boss", "Sir", "Master","Mr. Stark"] , 
        answer:["Boss"],
    },
    {
        question:'What is Hela, the villain in "Thor: Ragnarok", the goddess of?',
        option:["Swords", "Asgard", "Death","Black and Green stuff"] , 
        answer:["Death"],
    },
    {
        question:'What is the name of Peter Parkers best friend in "Spiderman: Homecoming"?',
        option:["Mary Jane", "Flash", "Ned","Tony Stark"] , 
        answer:["Ned"],
    }
]

console.log(head("***** Welcome to " + que(" Avengers: Endgame Ultimate Trivia Quiz" )+ " *****"));
var friend = readLineSync.question(que("What's your name? "));
console.log(ans("Hey! Welcome "+ head(friend.toLocaleUpperCase())));
console.log("---------------------");
console.log(ans(friend.toLocaleUpperCase() +" Best of Luck!"));
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
        if( score > 0)
             score =  score-5;
        console.log(que("NAHH!"));
    }

    console.log("-------------------");
}

function levelOne(){
    for(var i = 0; i< questionsSetOne.length; i++){
        var currentQuestion = questionsSetOne[i];
        play(currentQuestion.question,currentQuestion.option ,currentQuestion.answer);
    }
    console.clear()
}

function levelTwo(){
    for(var i = 0; i< questionsSetTwo.length; i++){
        var currentQuestion = questionsSetTwo[i];
        play(currentQuestion.question,currentQuestion.option ,currentQuestion.answer);
    }
    console.clear()
}

function showScore(){

    if(score >= 80){
        console.log();
        console.log(won("Hey! Great Job " + ans(friend.toLocaleUpperCase())));
        console.log(scoreColor(("your Total Score is: "+ ans(score))));
        highScore.name.push(friend);
        highScore.score.push(score);

    }else{
        console.log();
        console.log(scoreColor("Hey! your Total Score is: "+ ans(score)));
    }
}

function showLeaderboard() {
    console.log("---------------------");
    console.log(ans("Check LeaderBoard! You also Can be in leaderboard..."));
    console.log();
    console.log(ans("Complete All Level & " +  que("Follow Instruction on GitHub")));
    console.log();

    var arrLength = highScore.name.length;
    for(var i =0; i<arrLength; i++){
        console.table(que(highScore.name[i]) + ":" + ans(highScore.score[i]) );
    }
}

function gameLevelOne(){
    if(readLineSync.keyInYN(que("Ready to Play Level 1? Y/N"))){
        console.clear();
        console.log(head("***** Welcome to " + que(" Avengers: Endgame Ultimate Trivia Quiz" ) + " *****"));
        levelOne();
        check = 1; 
    }
}

function gameLevelTwo(){
    if(readLineSync.keyInYN(que("Ready to Play Level 2? Y/N"))){
        console.clear();
        console.log(head("***** Welcome to " + que(" Avengers: Endgame Ultimate Trivia Quiz" ) + " *****"));
        levelTwo();
    }
}

gameLevelOne();
console.clear()
if(check === 1){
    gameLevelTwo();
}
console.clear()
if(readLineSync.keyInYN(que("Want to see Score & LeaderBoard"))){
    showScore();
    showLeaderboard()
}else{
    process.exit();
}


/* function saySomething(){
    var secret = readLineSync.question('Please whisper sweet words: ',{
        hideEchoBack: true,
        mask: require('chalk').magenta('\u2665')
      });
    friendsMsg.msg.push(secret);
    friendsMsg.name.push(friend);
} */
/* saySomething(); */
