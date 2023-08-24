//declaring DOM variables
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



function startGame() {
     timerCount = 10;

     startButton.disabled = true;
startTimer()
}


function quitGame() {

}




var counter = 10;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Count down complete</h3>");  
        return;
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);


function correctAnswer() {
wordBlank.textcontent = "Correct answer!"
winCounter++
startButton.disabled = false;
setWins()
}

//questions



//event listeners

startButton.addEventListener("click", startGame);

document.getElementById("secs").innerHTML = seconds + "s"
document.getElementById('button').onclick = function() {


}





