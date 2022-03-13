var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-time");
var quizStartSection = document.querySelector("#quiz-start");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var allQuestions = document.querySelectorAll(".quiz-box");
var buttonSelectorEl = document.querySelector("#main");
var answerFeedback = document.querySelectorAll(".result")
var timeLeft = 0;



var taskButtonHandler = function(event){
    var choiceEl = event.target;
    var x = 0

    if (choiceEl.matches(".correct")){
        console.log("correct")
        answerFeedback[x].textContent = "CORRECT!";
                  
    };
    if (choiceEl.matches(".wrong")){
        console.log("wrong")
        answerFeedback[x].textContent = "INCORRECT!";
    };
    x++
};


var countdown = function(){
    var TimeLeft = 75;
    timerEl.textContent = TimeLeft

    var timerInterval = setInterval(function() {
        timerEl.textContent = TimeLeft--;

        if (TimeLeft <0) {
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
buttonSelectorEl.addEventListener("click", taskButtonHandler);