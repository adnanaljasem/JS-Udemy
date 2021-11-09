'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// define current score outside the function
let currentScore = 0;
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice
  // remove hidden class
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. check for rollled 1:
  if (dice !== 1) {
    //add dice to current score
    currentScore = currentScore + dice; //(currentScore += dice)
    current0El.textContent = currentScore; //change later for each current player
  } else {
    // Switch to next player
  }
});
