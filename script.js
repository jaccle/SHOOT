//var rock = document.getElementById("rock");
//var paper = document.getElementById("paper");
//var scissors = document.getElementById("scissors");
var choices = document.getElementsByClassName("choices");
var wins = document.getElementsByClassName("wins");
var losses = document.getElementsByClassName("losses");
var draws = document.getElementsByClassName("draw");
var AI;
var player;

var AIscore = 0;
var playerScore = 0;
var drawScore = 0;

//establish three choices -> done in html

//establish what beats what (if)
function winner() {
   //0==rock, 1==paper, 2==scissors
   if (AI === 0 && player === "scissors" || AI === 2 && player === "paper" || AI === 1 && player === "rock") {
      AIscore++;
      losses[0].innerText = "Lost: " + AIscore;
   } else if (AI === 0 && player === "paper" || AI === 2 && player === "rock" || AI === 1 && player === "scissors") {
      playerScore++;
      wins[0].innerText = "Won: " + playerScore;
   } else {
      drawScore++;
      draws[0].innerText = "Nobody wins: " + drawScore;
   }
   AIselect();
   for (var i = 0; i < choices.length; i++) {
      choices[i].checked = false;
   }
}

//random computer choice onload or reset
function AIselect() {
   AI = Math.floor(Math.random() * 3);
   console.log(AI + " 0==rock, 1==paper, 2==scissors");
}



window.onload = function () {
   AIselect();
   //player choice
   for (var i = 0; i < choices.length; i++) {
      choices[i].addEventListener("click", function () {
         player = this.id;
         winner();
      });
   }
};
