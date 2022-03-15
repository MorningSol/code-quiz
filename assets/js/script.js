var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-time");
var quizStartSection = document.querySelector("#quiz-start");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var quizResultsEl = document.querySelector("#results-page");
var highscorePageEl = document.querySelector("#highscore-page");
var allQuestions = document.querySelectorAll(".quiz-box");
var resultsFormEl = document.querySelector("#quiz-results")
var buttonQuestion1El = document.querySelector("#btn-question1");
var buttonQuestion2El = document.querySelector("#btn-question2");
var buttonQuestion3El = document.querySelector("#btn-question3");
var buttonQuestion4El = document.querySelector("#btn-question4");
var postScoreEl = document.querySelector("#score");
var answerFeedback = document.querySelectorAll(".result");
var timeLeft = 0;
var questionProgression = 0;
var timerInterval;
var currentScore = 0;
var scoreIdCounter = 0;
var scoreSheet = document.querySelector("#score-sheet");
var highscoreArr = [];

var nextQuestion = function() {
    switch (questionProgression) {
    case 0:
        question1El.style.display = "none";
        question2El.style.display = "flex";
        questionProgression++
        break;
    case 1: 
        question2El.style.display = "none";
        question3El.style.display = "flex";
        questionProgression++
        break;
        
    case 2:
        question3El.style.display = "none";
        question4El.style.display = "flex";
        questionProgression++
        break;
    case 3:
        question4El.style.display = "none";
        quizResultsEl.style.display = "flex";
        clearInterval(timerInterval)
        postScoreEl.textContent = timerEl.textContent;
        currentScore = timerEl.textContent   
    };             
};

var taskButtonHandler = function(event){
    var choiceEl = event.target;
    
    if (choiceEl.matches(".correct")){
        console.log("correct")
        answerFeedback[questionProgression].textContent = "CORRECT!";
          
    };
    if (choiceEl.matches(".wrong")){
        console.log("wrong")
        answerFeedback[questionProgression].textContent = "INCORRECT!";
       
        timeLeft -= 10;
    };
    
    setTimeout(function() {nextQuestion()},900);
};


var countdown = function(){
    timeLeft = 75;
    timerEl.textContent = timeLeft

    timerInterval = setInterval(function() {
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
    x = 0;
    countdown()
};

var gameOver = function() {

    for (var i = 0; i < allQuestions.length; i++){
        allQuestions[i].style.display = "none"
    };

    alert("You have run out of time and your score is 0.  Please try again")
    quizStartSection.style.display = "flex";
};

var scoreInfoHandler = function(event){
    event.preventDefault();
    var initialInput = document.querySelector("input[name = 'player-initials']").value;

    if (!initialInput){
        alert("You need to input your initials!");
        return false
    }

    resultsFormEl.reset();

    initialInput = initialInput.toUpperCase();

    var playerInfoObj = {
        initials: initialInput,
        score: currentScore
    };
    quizResultsEl.style.display = "none";
    highscorePageEl.style.display = "flex";

    createScoreInfoEl(playerInfoObj);
};

createScoreInfoEl = function(playerInfoObj){
    var scoreListItem = document.createElement("li");
    scoreListItem.setAttribute("data-score-id", scoreIdCounter)

    scoreListItem.innerHTML = playerInfoObj.initials + " - " + playerInfoObj.score
    scoreSheet.appendChild(scoreListItem);

    playerInfoObj.id = scoreIdCounter;
    
    
    highscoreArr.push(playerInfoObj);
    
    saveScores();

    scoreIdCounter++
}

var saveScores = function(){
    localStorage.setItem("highscoreArr", JSON.stringify(highscoreArr));
};

var loadScores = function(){
    var scoresLoaded = localStorage.getItem("highscoreArr");

    if (!scoresLoaded) {
        return false;
    };

    scoresLoaded = JSON.parse(scoresLoaded);

    for (var i = 0; i < scoresLoaded.length; i++) {
        createScoreInfoEl(scoresLoaded[i]);
    };

};


startButtonEl.addEventListener("click", startQuiz);
buttonQuestion1El.addEventListener("click", taskButtonHandler);
buttonQuestion2El.addEventListener("click", taskButtonHandler);
buttonQuestion3El.addEventListener("click", taskButtonHandler);
buttonQuestion4El.addEventListener("click", taskButtonHandler);
quizResultsEl.addEventListener("submit",scoreInfoHandler);

loadScores();