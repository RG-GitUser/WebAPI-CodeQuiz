//declaring variables
var timer; 
var ele = document.getElementById('timer')
var currentQuestion; 

var answers = ["A","B","C"];


//Start button 

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startQuiz)

var questionIndex = 0;
var questionBox = document.getElementById("question-box")
function startQuiz(){
    console.log("startquiz")
    console.log(questions[questionIndex].question)
    questionBox.textContent = questions[questionIndex].question
    questionIndex = questionIndex +1 


//setting the timer 

    var sec = 0; 
    timer = setInterval(()=>{
       ele.innerHTML = 'Timer: 00:'+sec;
         sec ++; 
     }, 1000)
}




function pause(){
    clearInterval(timer); 
}
  
//questions 

var questions = [
    {

    question: "JavaScript is used for...",
    answers: [ "Making our webpage look shiny", "Structuring our webpage", "Adding functinoality to our webapage"],
    correctAnswer: "Adding functionality to our webpage" 
},
{
    question: "what element do we use to create a variable?",
    answers:[ "A - var", "B - function", "C - variable"],
    correctAnswer: "" 
},
{
    question: "How can we connect our JavaScript to functionality to the HTML?",
    answers:[ "var", "function", "variable"],
    correctAnswer: " var" 
}

]


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



//event listeners

// currentQuestion.addEventListener("click", nextQuestion);

function nextQuestion() {
  alert ("Correct!");
}


// document.getElementById('button').onclick = function() {












