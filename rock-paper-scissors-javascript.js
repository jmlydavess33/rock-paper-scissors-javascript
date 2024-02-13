const getUserChoice = () => {
  let userInput;
  do {
      userInput = prompt('Enter your choice (rock, paper, scissors)').trim().toLowerCase();
  } while (!['rock', 'paper', 'scissors', 'bomb'].includes(userInput));
  return userInput;
};

const computerPlay = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return 'It\'s a tie';
  const winConditions = {
      'rock': { 'scissors': 'Rock crushes scissors', 'bomb': 'You win with bomb' },
      'paper': { 'rock': 'Paper covers rock', 'bomb': 'You win with bomb' },
      'scissors': { 'paper': 'Scissors cut paper', 'bomb': 'You lose to bomb' }
  };
  return winConditions[playerSelection] && winConditions[playerSelection][computerSelection] ?
      `You win! ${winConditions[playerSelection][computerSelection]}` :
      `You lose! ${winConditions[computerSelection][playerSelection]}`;
};

const game = () => {
  let [playerScore, computerScore, tieScore] = [0, 0, 0];

  for (let i = 0; i < 5; i++) {
      const userChoice = getUserChoice();
      const computerSelection = computerPlay();
      const result = playRound(userChoice, computerSelection);
      alert(`Round ${i + 1}\nYou select: ${userChoice}\nComputer selects: ${computerSelection}\n${result}`);

      if (result.includes('win')) playerScore++;
      else if (result.includes('lose')) computerScore++;
      else tieScore++;
  }

  const gameResult = playerScore > computerScore ? 'You are the ultimate champion!' :
      playerScore < computerScore ? 'You lost the game!' : 'It\'s a Tie!';
  alert(`\nGame Over!\nYour score: ${playerScore}\nComputer's score: ${computerScore}\nTie : ${tieScore}\n${gameResult}`);
};

game();
