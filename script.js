//declaring variables
var timer; 
var ele = document.getElementById('timer')



var winCounter = 0;
var loseCounter = 0;
var timer;
var timerCount;
var timerWin

var answers = ["A","B","C"];

//setting the timer 

(function (){
    var sec = 0; 
    timer = setInterval(()=>{
        ele.innerHTML = '00:'+sec;
        sec ++; 
    }, 1000)
})()

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




document.getElementById("secs").innerHTML = seconds + "s"
document.getElementById('button').onclick = function() {


}





