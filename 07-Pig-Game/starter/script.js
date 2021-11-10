'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; //instead of 4 lines

// Starting conditions
const init = function () {
  scores = [0, 0];
  // define current score outside the function
  currentScore = 0;
  activePlayer = 0; //panyer 1 is active in the beginning
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  //remove winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //remove active class
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// funciton to switch player to make our code DRY
const switchPlayer = function () {
  //befor switching, set the score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //this whereever you want ,, //set current score back to 0
  currentScore = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality (if plying = true)
btnRoll.addEventListener('click', function () {
  if (playing /*playing === true*/) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    // example: scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if playerüs scoer is >= 100
    if (scores[activePlayer] >= 100) {
      //if yes finish the game
      playing = false;
      //hide dice by adding hidden class
      diceEl.classList.add('hidden');
      // add winner class and remove active class:
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //if no Switch to next player
      switchPlayer();
    }
  }
});
//reset the game
btnNew.addEventListener('click', init);
