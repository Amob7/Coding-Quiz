//Define global variables
var count = 0;
var sumPoints = 0;
var questions;
var choices;
var cAnswer;
var secondsLeft = 60;
var answer = 4;
var i = 0
var wins = 0;

// using array to store objects
allQuestions = [ 
    {
        questions: "How do you create a function in JavaScript",
        choices: ["function myFunction() ", "myFunction()", "function = myFunction()", "function:myFunction()"],
        correctAnswer: 0},
    {
        questions: "How do you call a function named 'myFunction'",
        choices: ["call function myFunction()", "myFunction", "call myFunction", "myFunction()"],
        correctAnswer: 3},
    {
        questions: "How to write an if statement", 
        choices: ["if i=5 then", "if (i==5)", "if i==5 then", "if i=5"],
        correctAnswer: 1},
    {
        questions: "how to call a while loop",
        choices: ["while i -1 to 10", "while (i <= 10)", "while i <=10", "while(i<=10;i++"],
        correctAnswer: 1}
];

//elements
var intro = document.getElementById("intro");
var startEl = document.getElementById("start");
var userQuestion = document.getElementById("Q");
var choices1 = document.getElementById("choices1");
var choices2 = document.getElementById("choices2");
var choices3 = document.getElementById("choices3");
var choices4 = document.getElementById("choices4");
var timeEl = document.querySelector(".timer");
var finishEl = document.getElementById("finish");

function quiz(){
    if(i<allQuestions.length){
        // grabs i question and choices and puts into the buttons
        userQuestion.textContent = allQuestions[i].questions;
        choices1.textContent = allQuestions[i].choices[0];
        choices2.textContent = allQuestions[i].choices[1];
        choices3.textContent = allQuestions[i].choices[2];
        choices4.textContent = allQuestions[i].choices[3];
        //displays both question and choices
        userQuestion.style.display = "initial";
        choices1.style.display = "block";
        choices2.style.display = "block";
        choices3.style.display = "block";
        choices4.style.display = "block";
        
        cAnswer = allQuestions[i].correctAnswer;
        console.log(cAnswer)
        
        choices1.addEventListener('click', function(){
            if(cAnswer === 0){
                wins ++;
            }
            else{
                secondsLeft = secondsLeft - 10
            }
            i++;
            quiz();
        })
        choices2.addEventListener('click', function(){
            if(cAnswer === 1){
                wins ++;
            }
            else{
                secondsLeft = secondsLeft - 10
            }
            i++;
            quiz();
        })
        choices3.addEventListener('click', function(){
            if(cAnswer === 2){
                wins ++;
            }
            else{
                secondsLeft = secondsLeft - 10
            }
            i++;
            quiz();
        })
        choices4.addEventListener('click', function(){
            if(cAnswer === 3){
                wins ++;
            }
            else{
                secondsLeft = secondsLeft - 10
            }
            i++;
            quiz();
        })
    }
    else{
        return
    }
};

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timeEl.textContent = secondsLeft + " seconds left";
        secondsLeft--;
        
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.style.display = "none";
            userQuestion.style.display = "none";
            choices1.style.display = "none";
            choices2.style.display = "none";
            choices3.style.display = "none";
            choices4.style.display = "none";
            finishEl.style.display = "initial"
            finishEl.textContent = "Time ran out. You were able to get " + wins + " points."
        }
        if(i===1){
            finishEl.style.display = "inital"
            finishEl.textContent = "Congrats you finished the test with " + wins + " points"
        }
    }, 1000);
}

function startgame(event){
    event.preventDefault()
    intro.style.display = "none";
    setTime();
    quiz();
};

startEl.addEventListener('click', startgame);