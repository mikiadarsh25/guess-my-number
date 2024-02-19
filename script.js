let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value);
//   When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
  } 
  // When Player wins
  else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } 

//   When guess is wrong
else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' :'📉 Too Low!');
        score--;
        displayScore(score);
      } else {
        displayMessage('💥 You Lost The Game!');
      }
}
// //   When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost The Game!';
//     }
//   } 
// //   When guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost The Game!';
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';
} );
