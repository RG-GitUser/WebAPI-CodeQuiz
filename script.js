//declaring variables
var timer;
var ele = document.getElementById('timer')
var currentQuestion;




//Start button 

var startBtn = document.getElementsByClassName("start-button");
startBtn[0].addEventListener("start", function () {
    console.log("started")
})


var questionIndex = 0;
var questionBox = document.getElementById("question-box")
function startQuiz() {
    console.log("startquiz")
    console.log(questions[questionIndex].question)
    questionBox.textContent = questions[questionIndex].question
    questionIndex = questionIndex + 1
}



//setting the timer 

var sec = 0; 
timer = setInterval =(()=>{
    ele.innerHTML = '00:'+sec;
    sec++;
}, 1000)



//questions 

var questions = [
    {

        question: "JavaScript is used for...",
        answers: ["Making our webpage look shiny", "Structuring our webpage", "Adding functinoality to our webapage"],
        correctAnswer: "Adding functionality to our webpage"
    },
    {
        question: "what element do we use to create a variable?",
        answers: ["A - var", "B - function", "C - variable"],
        correctAnswer: ""
    },
    {
        question: "How can we connect our JavaScript to functionality to the HTML?",
        answers: ["var", "function", "variable"],
        correctAnswer: " var"
    }

]


//Win/Lose 
function correctAnswer() {
}

function nextQuestion() {
    alert("Correct!");
}























