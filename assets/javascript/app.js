// Global Variables

var correct = 0;
var wrong = 0;
var timer;
var timesUp = true;
var lostGame = 0
var timeToGuess;
var questionlist;
var index = 0;

function reset() {
   
    questionlist;
    index = 0;
    $("#question").empty();
    $(".choice1").empty();
    $(".choice2").empty();
    $(".choice3").empty();
    $(".choice4").empty();
    correct = 0;
    wrong = 0;
    $(this).attr("disabled", false)
    myButton.disabled = false; return false
}

// Function to populate the DOM with the next question - in Array order

function newQuestion() {
    if (index < questionList.length) {
        $("#question").empty();
        $(".choice1").empty();
        $(".choice2").empty();
        $(".choice3").empty();
        $(".choice4").empty();
        $("#question").append(
            `<div>${questionList[index].question}</div>`

        )
        $(".choice1").append(
            `${"<input type='radio' value='0' name='firstQ'> " + questionList[index].answers[0]}`
        )
        $(".choice2").append(
            `${"<input type='radio' value='1' name='firstQ'> " + questionList[index].answers[1]}`
        )
        $(".choice3").append(
            `${"<input type='radio' value='2' name='firstQ'> " + questionList[index].answers[2]}`
        )
        $(".choice4").append(
            `${"<input type='radio' value='3' name='firstQ'> " + questionList[index].answers[3]}`
        )
    }
}

// Function that, when run, will end the game and add scores //

function gameOver() {
    alert("Game Over! But feel free to play again");
    lostGame++;
    console.log("lost Game: " + lostGame)
    $("#wins").append(`<div>${lostGame}`)
    reset();
}

// function to start game by clicking on the startGame button //

$("#startGame").on("click", function () {
    setTimeout(gameOver, 1000 * 10);
    $(this).attr("disabled", true)
    // timer will be set to 45 seconds - but for now it's 2 for testing//
    // $("#game-over").css("display", "none");
    // $("#mainGame").css("display", "block");
    newQuestion();
    onsubmit = "myButton.disabled = true; return true";
    // if (timesUp);

})

// Function to take the click function after user has made choice - that will calculate 
// correct and wrong choices - or end of the game after all questions have been asnwered. 

$("#submitButton").on("click", function () {
    var answer = $("input[name=firstQ]:checked").val()
    console.log(typeof answer);
    index++;

    if (index > questionList.length) {
        gameOver();
    }
    else if (answer == questionList[index].correctAns) {
            correct++;
            newQuestion();
            console.log(correct);
        }
    else {
            wrong++;
            newQuestion();
            console.log(wrong);
        }
    })
