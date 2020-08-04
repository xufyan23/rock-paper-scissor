"use strict";

let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_h1 = document.querySelector(".result > h1");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissor_div = document.getElementById("scissor");


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor']
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_h1.innerHTML = `${userChoice} ${smallUserWord} beats || ${computerChoice} ${smallCompWord} You win :)`;
  document.getElementById(userChoice).classList.add("blue-glow");
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_h1.innerHTML = `${userChoice} ${smallUserWord} looses to || ${computerChoice} ${smallCompWord} You lost :(`;
  document.getElementById(userChoice).classList.add("red-glow");
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_h1.innerHTML = `${userChoice} ${smallUserWord} equals || ${computerChoice} ${smallCompWord} its a draw :(`;
  document.getElementById(userChoice).classList.add("yellow-glow");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game("rock")
  })

  paper_div.addEventListener('click', function () {
    game("paper")
  })

  scissor_div.addEventListener('click', function () {
    game("scissor")
  })
}

main()
