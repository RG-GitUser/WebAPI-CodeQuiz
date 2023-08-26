//declaring variables
var timer; 
var ele = document.getElementById('timer')

var answers = ["A","B","C"];

//setting the timer 

var startBtn = document.getElementsByClassName("start-button");
startBtn[0].addEventListener("start", function(){
    console.log("started")
})

var stopBtn = document.getElementsByClassName("stop-button");
stopBtn[0].addEventListener('click', function(){
    console.log("stopped")
})

function startQuiz(){
    var sec = 0; 
    timer = setInterval(()=>{
        ele.innerHTML = '00:'+sec;
        sec ++; 
    }, 1000)
}




function pause(){
    clearInterval(timer); 
}
  



//Win/Lose 

function init() {
    getWins();
    getlosses();
}

function correctAnswer() {
    wordBlank.textcontent = "Correct answer!"
    winCounter++
    startButton.disabled = false;
    setWins()
    }



//questions



//event listeners


document.getElementById('button').onclick = function() {


}



let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");

