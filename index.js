var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var winner;
if (player1 === player2) {
  winner = "Draw";
} else if (player1 > player2) {
  winner = "player1";
} else {
  winner = "player2";
}

document.getElementById("result").textContent = winner;
var img1 = document.querySelector(".img1");
img1.src = `./images/dice${player1}.png`;

var img2 = document.querySelector(".img2");
img2.src = `./images/dice${player2}.png`;
