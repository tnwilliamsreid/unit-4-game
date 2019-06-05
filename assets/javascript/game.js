var yourScore = document.getElementById('yourScore');

yourScore.innerHTML = 0; 
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(12, 1);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
console.log(red.value);

var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");


red.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

blue.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

yellow.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

function getRandomValue (a, b){
  return Math.floor((Math.random() * 101) + 19);
}

function checkPlayerScore() {
 
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('YOU WON!');
  } else if (playerInt > targetInt) {
    alert('YOU LOST!');
  } 
}

