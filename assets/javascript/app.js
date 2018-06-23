// Global Variables

var correct = 0;
var wrong = 0;
var timer;
var timeToGuess;
var questionlist;
var index = 0;
var questionDur = 10;
var answerDur = 3;
var gameLength = 40;
var gameRunning = true;



$("#startGame").on("click", function () {
    index = 0;
    $(".game-over").css("display", "none");
    $(".mainGame").css("display", "block");
    newQuestion();
    console.log(newQuestion);
    gameRunning = false;
})

function newQuestion() {
    if (index < questionList.length) {
        $("#question").empty();
        $(".answer").empty();
        $("#question").append(
            `<div>${questionList[index].question}</div>`

        )
        $(".choice1").append(
            `${questionList[index].answers[0]}`
        )
        $(".choice2").append(
            `${questionList[index].answers[1]}`
        )
        $(".choice3").append(
            `${questionList[index].answers[2]}`
        )
        $(".choice4").append(
            `${questionList[index].answers[3]}`
        )
        index++
    }

}



function makeGuess() {


}

function showResult() {


}

function showTimer() {


}

function timeUp() {

}

function resetTimer() {


}

function gameOver() {


}



$(document).ready(startGame);