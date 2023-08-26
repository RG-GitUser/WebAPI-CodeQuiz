//declaring variables
var timer; 
var ele = document.getElementById('timer')
var currentQuestion; 




//Start button 

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startQuiz)



//setting the timer 

    var sec = 0; 
    timer = setInterval(()=>{
       ele.innerHTML = 'Timer: 00:'+sec;
         sec ++; 
     }, 100)





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
    answers:[ "var", "function", "variable"],
    correctAnswer: "var" 
},
{
    question: "How can we connect our JavaScript functionality to the HTML?",
    answers:[ "Using the elements in HTML", "Adding a link element to our HTML", "Linking JavaScript local file to our type and src"],
    correctAnswer: "Linking JavaScript local file to our type and src" 
}

]

//EXAMPLE

 var questionIndex = 0;
 var questionBox = document.getElementById("question-one")
 function startQuiz(){
     console.log("startquiz")
     console.log(questions[questionIndex].question)
     questionBox.textContent = questions[questionIndex].question
     questionIndex = questionIndex +1 
 }


//First question 

var answerIndex = 0;
var answerOne = document.getElementById("question-answer")
answerOne.addEventListener("click", answerQuestion)

function answerQuestion() {
    console.log("answer one")
    answerOne.textContent = answers[answerIndex].correctAnswer
   answerIndex = answerIndex +1 
    

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



//event listeners


function nextQuestion() {
  alert ("Correct!");
}


// document.getElementById('button').onclick = function() {












