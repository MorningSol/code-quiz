var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-time");
var quizStartSection = document.querySelector("#quiz-start");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var allQuestions = document.querySelectorAll(".quiz-box");
var buttonQuestion1El = document.querySelector("#btn-question1");
var buttonQuestion2El = document.querySelector("#btn-question2");
var buttonQuestion3El = document.querySelector("#btn-question3");
var buttonQuestion4El = document.querySelector("#btn-question4");
var answerFeedback = document.querySelectorAll(".result")
var timeLeft = 0;
var x = 0;

var nextQuestion = function() {

    if (question1El.style.display = "flex"){
        question1El.style.display = "none";
        question2El.style.display = "flex";
    }
    else if (question2El.style.display = "flex") {
        question2El.style.display = "none";
        question3El.style.display = "flex";
    }
    else if (question3El.style.display = "flex") {
        question3El.style.display = "none";
        question4El.style.display = "flex";
    }
    else{
        console.log("out of questions")
    }   
};

var taskButtonHandler = function(event){
    var choiceEl = event.target;
    
    if (choiceEl.matches(".correct")){
        console.log("correct")
        answerFeedback[x].textContent = "CORRECT!";
        x++   
    };
    if (choiceEl.matches(".wrong")){
        console.log("wrong")
        answerFeedback[x].textContent = "INCORRECT!";
        x++
        timeLeft -= 10;
    };

    var delay = setTimeout(function() {nextQuestion()},1000);
};


var countdown = function(){
    timeLeft = 75;
    timerEl.textContent = timeLeft

    var timerInterval = setInterval(function() {
        timerEl.textContent = timeLeft--;

        if (timeLeft <0) {
            clearInterval(timerInterval);
            gameOver()
            
        } 
    }, 1000);
};


var startQuiz = function() {
   
    quizStartSection.style.display = "none";
    question1El.style.display = "flex";
    countdown()
};

var gameOver = function() {

    for (var i = 0; i < allQuestions.length; i++){
        allQuestions[i].style.display = "none"
    };

    alert("You have run out of time and your score is 0.  Please try again")
    quizStartSection.style.display = "flex";
};





startButtonEl.addEventListener("click", startQuiz);
buttonQuestion1El.addEventListener("click", taskButtonHandler);
buttonQuestion2El.addEventListener("click", taskButtonHandler);
buttonQuestion3El.addEventListener("click", taskButtonHandler);
buttonQuestion4El.addEventListener("click", taskButtonHandler);
