var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-time");
var quizStartSection = document.querySelector("#quiz-start");
var questionOne = document.querySelector("#question1");
var questionTwo = document.querySelector("#question2");
var questionThree = document.querySelector("#question3");
var questionFour = document.querySelector("#question4");
var allQuestions = document.querySelectorAll(".quiz-box")
var timeLeft = 0;


var countdown = function(){
    var TimeLeft = 75;
    timerEl.textContent = TimeLeft

    var timerInterval = setInterval(function() {
        timerEl.textContent = TimeLeft--;

        if (TimeLeft <0) {
            clearInterval(timerInterval);
            gameOver()
        } 
    }, 100);
};


var startQuiz = function() {
   
    quizStartSection.style.display = "none";
    questionOne.style.display = "flex";
    countdown()
};

var gameOver = function() {

    for (var i = 0; i < allQuestions.length; i++){
        allQuestions[i].style.display = "none"
    };

    

};





startButtonEl.addEventListener("click", startQuiz)