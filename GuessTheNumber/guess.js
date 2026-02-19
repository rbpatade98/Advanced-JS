let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guess');      // fixed
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.LowOrHigh');    // fixed
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 0;
let playGame = true;


submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (!playGame) return;
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    numGuess++;
    displayGuess(guess);

    if (guess === randomNumber) {
      displayMessage('You guessed it right!');
      endGame();
    } else if (numGuess === 10) {
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      if (guess < randomNumber) {
        displayMessage('Too low!');
      } else {
        displayMessage('Too high!');
      }
    }
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = prevGuess.join(', ');
  remaining.innerHTML = 10 - numGuess;
}

function displayMessage(message) {
  lowOrHi.textContent = message;
}

function endGame() {
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  playGame = false;

  const newBtn = document.createElement('button');
  newBtn.textContent = 'Start New Game';
  newBtn.classList.add('newGameBtn');
  startOver.appendChild(newBtn);

  newBtn.addEventListener('click', resetGame);
}

function resetGame() {
  numGuess = 0;
  prevGuess = [];
  randomNumber = Math.floor(Math.random() * 100) + 1;
  userInput.removeAttribute('disabled');
  submit.removeAttribute('disabled');
  guessSlot.innerHTML = '';
  remaining.innerHTML = 10;
  lowOrHi.textContent = '';
  
  const btn = document.querySelector('.newGameBtn');
  btn.remove();
  playGame = true;
}
