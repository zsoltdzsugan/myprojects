var gamePattern = [];
var userPattern = [];
var btnColor = ["red", "blue", "green", "yellow"];

var level = 0;
var started = false;

function nextSequence() {
    userPattern = [];
    level++;
    $("h1").text("Level " + level);
    var rndNum = Math.floor(Math.random() * 4);
    var rndChosenColor = btnColor[rndNum];
    gamePattern.push(rndChosenColor);
    flash(rndChosenColor);
    playSound(rndChosenColor);
}

function gameStart() {
    $(document).keydown(function() {
        if (!started) {
            $("h1").text("Level " + level);
            started = true;
            nextSequence();
        }
    });
}

function flash(currentColor) {
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
    audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function userSequence() {
    $(".btn").click(function() {
        userChosenColor = this.id;
        userPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userPattern.length - 1);
    });
}

function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over. Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

gameStart();
userSequence();