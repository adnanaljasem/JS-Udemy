'use strict';
//DOM: Document Object Model
// API: Application programming Interface
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 3;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;
//if you want to show the secrest number:
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } //When player wins:
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "That's Correct!";
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //highscore:
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //If the guessed number is higher:
  } else if (guess > secretNumber) {
    //to reduce the score number with each try until losing the game
    if (score > 1) {
      document.querySelector('.message').textContent = "It's Heigher";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
    //If the guessed nuber is lower:
  } else if (guess < secretNumber) {
    //Also to reduce the score number with each try until losing the game:
    if (score > 1) {
      document.querySelector('.message').textContent = "It's Lower";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
