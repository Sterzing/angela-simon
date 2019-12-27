var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var arr1 = ["blue", "red", "yellow"];
var arr2 = ["blue", "red", "yellow"];

//$("h1").text("Level " + level);

$(document).keydown(function() {
  if (started === false) {
    nextSequence();
    $("h1").text("Level " + level);
    started = true;
  }
});

function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  var colorID = "#" + randomChosenColor;
  $(colorID)
    .fadeOut(500)
    .fadeIn(500);
  //console.log(gamePattern);
  playSound(randomChosenColor);
}

$(".btn").click(function(e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  //console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern.indexOf(userChosenColor));
});

function checkAnswer(currentLevel) {
  console.log(currentLevel);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      userClickedPattern = [];
      setTimeout(function() {
        nextSequence();
      }, 1000);
    };
  } else {
    playSound("wrong")
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}




// var gamePattern = [];

// gamePattern.push(randomChosenColor);

// var buttonColors = ["red", "blue", "green", "yellow"];

// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4);
//     //return randomNumber;
//     //var randomChosenColor = buttonColors;
// }

// var randomChosenColor = buttonColors[nextSequence()];
// var gamePattern = [];

// var buttonColours = ["red", "blue", "green", "yellow"];

// var randomChosenColour = buttonColours[nextSequence()];

// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4);
//     return randomNumber;
// }

// gamePattern.push(randomChosenColour);
