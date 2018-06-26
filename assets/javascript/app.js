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

    // questionlist;
    index = 0;
    $("#question").empty();
    $(".choice1").empty();
    $(".choice2").empty();
    $(".choice3").empty();
    $(".choice4").empty();
    correct = 0;
    wrong = 0;
    // if (!onsubmit) { return; }
    $("#startGame").attr("disabled", false)
    // myButton.enabled = false; return false
}

// Function to populate the DOM with the next question - in Array order

function newQuestion() {
    if (index < questionList.length) {
        $("#question").empty();
        $(".choice1").empty();
        $(".choice2").empty();
        $(".choice3").empty();
        $(".choice4").empty();
        $("#enter").empty()
        $("#question").append(
            `<div>${questionList[index].question}</div>`

        )
        $(".choice1").append(
            `<input type='radio' value='0' name=question${index}> ${questionList[index].answers[0]}`
        )
        $(".choice2").append(
            `<input type='radio' value='1' name=question${index}> ${questionList[index].answers[1]}`
        )
        $(".choice3").append(
            `<input type='radio' value='2' name=question${index}> ${questionList[index].answers[2]}`
        )
        $(".choice4").append(
            `<input type='radio' value='3' name=question${index}> ${questionList[index].answers[3]}`
        )
        $("#enter").append(`
        <button type="submit" value="submit" disabled id="submitButton" class="btn btn-secondary button${index}">ENTER</button>
        `)
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
    // setTimeout(gameOver, 1000 * 10);
    // if(!onsubmit) {return;}
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
// if($(`input[name=question${index}]:checked`).val() === undefined){

// }
// $(`input[name=question${index}]`).change(function () { $("#submitButton").prop("disabled", false); });
$(document).on("change", `input:radio`, function () {
    $(`.button${index}`).attr("disabled", false)
})
$(document).on("click", "#submitButton", function () {
    var answer = $(`input[name=question${index}]:checked`).val()
    console.log(answer);
    console.log("correct answer", questionList[index].correctAns)
    index++;

    if (index > questionList.length - 1) {
        gameOver();
    }
    else if (answer == questionList[index].correctAns) {
        correct++;
        newQuestion();
        // console.log(correct);
    }
    else {
        wrong++;
        newQuestion();
        // console.log(wrong);
    }
})
