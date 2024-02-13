const playerSelection = () => {
    const userInput = prompt('Enter your choice (rock, paper, scissors)').trim().toLowerCase();

    if (userInput === null || userInput === "" || !['rock', 'paper', 'scissors', 'bomb'].includes(userInput)) {
        alert("You entered an invalid choice or canceled the game.");
        return 'invalid';
    }
    return userInput;
};

const computerPlay = () => {
    const ranNum = Math.floor(Math.random()*3);
        switch (ranNum) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
        }
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'invalid') {
        return 'Please enter "rock," "paper," or "scissors."';
    }

    if(playerSelection === computerSelection){
        return 'It\'s a tie';
    }
  
    if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock'
        } else
        { return 'Wow, congratulations! You win!'
        }
    }
  
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper'
        } else 
        { return 'Wow, congratulations! You win!'
        }
    }
  
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock')
        { return 'You Lose! Rock beats Scissors'
        } else {
        return 'Wow, congratulations! You win!'
        }
    }

    if(playerSelection === 'bomb'){
        return 'Wow, congratulations! You win!'
    } //this is a powerful weapon  
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    for (let i = 0; i < 5; i++) {
        alert(`\nWELCOME!!!!\nROCK, PAPER, SCISSORS GAME!!!\nRound ${i + 1}: Click "ok" to start`);

        const userChoice = playerSelection();

        const computerSelection = computerPlay();

        alert(`Round ${i + 1}\nYou select: ${userChoice}\nComputer selects: ${computerSelection}`);

        const result = playRound(userChoice, computerSelection);

        alert(result);

        if (result.includes('Lose')) {
            computerScore++;
        } else if (result.includes('congratulations')) {
            playerScore++;
        } else {
            tieScore++;
        }
    }

    alert('\nGame Over!\nYour score: ' + playerScore + '\nComputer\'s score: ' + computerScore + '\nTie :' + tieScore );

    if (playerScore > computerScore) {
        alert('Congratulations! 🎉 You are the ultimate champion!');
    } else if (playerScore < computerScore) {
        alert('YOU LOST THE GAME! 😢 Are you ready for a rematch to reclaim your triumph? Simply refresh your browser or press F5 to start again.');
    } else {
        alert('It\'s a Tie! 🤝');
    }
};

game();