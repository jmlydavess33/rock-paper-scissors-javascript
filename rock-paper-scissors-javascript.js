const getUserChoice = userInput => {
    const lowerCaseInput = userInput.trim().toLowerCase();
        if (
            lowerCaseInput === 'rock' ||
            lowerCaseInput === 'paper' ||
            lowerCaseInput === 'scissors' ||
            lowerCaseInput === 'bomb'
            ) {
            return lowerCaseInput;
            } else {
            console.log('error');
            }
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
    if(playerSelection === computerSelection){return 'Neither team managed to secure a victory, and the game ended in a draw';
    }
  
    if(playerSelection === 'rock') {
      if(computerSelection === 'paper') {return 'You Lose! Paper beats Rock'}
      else {return 'Wow, congratulations! You have officially earned the title of a winner!'}
    }
  
    if(playerSelection === 'paper'){
      if(computerSelection === 'scissors'){return 'You Lose! Scissors beats Paper'}
      else {return 'Wow, congratulations! You have officially earned the title of a winner!'}
    }
  
    if(playerSelection === 'scissors'){
    if(computerSelection === 'rock'){return 'You Lose! Rock beats Scissors'}
    else {return 'Wow, congratulations! You have officially earned the title of a winner!'}
    }

    if(playerSelection === 'bomb'){
        return 'Wow, congratulations! You have officially earned the title of a winner!'
    } //this is a powerful weapon  
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

  

    for (let i = 0; i < 5; i++) {
        const userResponse = prompt(`\nWELCOME!!!!\nROCK, PAPER, SCISSORS GAME!!!\nRound ${
                i + 1
        }:\nEnter your choice (rock, paper, scissors)`, "Type your choice here");

    if (userResponse === null || userResponse.trim() === "") {
            alert("You canceled the game or didn't enter anything. Goodbye!");
            return; 
        }

        const computerSelection = computerPlay();
        const playerSelection = getUserChoice(userResponse);

        alert(`Round ${i + 1}\nYou select: ${playerSelection}\nComputer selects: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);

        alert(result);

        if (result.toLowerCase().includes('you lose')) {
            computerScore++;
        } else if (result.toLowerCase().includes('congratulations')) {
            playerScore++;
        } else { (result.toLowerCase().includes('was a tie'))
            tieScore++;
        }
        
    }

    alert('\nGame Over!\nYour score: ' + playerScore + '\nComputer\'s score: ' + computerScore + '\nTie :' + tieScore );

    if (playerScore > computerScore) {
        alert('Congratulations! 🎉 You emerged as the ultimate champion!');
    } else if (playerScore < computerScore) {
        alert('YOU LOST THE GAME! 😢 While this time may not have been your victory, there\'s always room for improvement. Are you ready for a rematch to reclaim your triumph? Simply refresh your browser or press F5 to start again.');
    } else {
        alert('It\'s a Tie! 🤝 A worthy opponent indeed. Are you up for another round to break the deadlock?');
    }
};

game();



    
    










