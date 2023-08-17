var questions = []
var score = 0;

for(var i=0; 1 < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions [i].answer){ 
        score++; 
        alert("Correct answer!");
    } else {
        alert("Incorrect answer.");
    }

}
 
alert("Total" + score + "/" + questions.length);



var question = [
    {
        prompt: "What does the object 'Function()' do?\n(a) Creates a new variable\n\ (b) A block of code that performs a specific task\n\ (c) Allows us to store multiple values  inside of a variable.",

        answer: "a"
    
    },
]