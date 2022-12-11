function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;

  return function guess(num) {
    if (gameOver) {
      return 'The game is over, you already won!';
    }

    if (num === answer) {
      gameOver = true;
      guesses++;
      return `You win! You found ${answer} in ${guesses} guesses.`;
    } else if (num > answer) {
      guesses++;
      return `${num} is too high!`;
    } else {
      guesses++;
      return `${num} is too low!`;
    }
  };
}

module.exports = { guessingGame };
