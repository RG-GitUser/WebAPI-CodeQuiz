//declaring variables
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var seconds = math.floor((distance % (1000 * 60)) / 1000);



var winCounter = 0;
var loseCounter = 0;
var timer;
var timerCount;
var timerWin

var answers = ["A","B","C"];



//setting functions

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


//setting the timer 

function startGame() {
    timerCount = 10;

    startButton.disabled = true;
renderBlanks()
startTimer()
}









//questions



//event listeners

startButton.addEventListener("click", startGame);

document.getElementById("secs").innerHTML = seconds + "s"
document.getElementById('button').onclick = function() {


}





