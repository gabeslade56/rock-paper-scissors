let choices = ['rock','paper','scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
function playRound(playerSelection, computerSelection){
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'paper') {
        computerScore++;
        return lose;
    }
    else if (computerSelection === 'rock'){
        return tie;
    }
    else {
        userScore++;
        return lose;
    }
  }
    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++
            return lose
        }
        else if (computerSelection === 'paper') {
            return tie
        }    
        else {
            userScore++
            return win
        }
    }
    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock'){
            computerScore++
            return lose
    }
        else if (computerSelection === 'scissors'){
            return tie
        }
        else {
            userScore++
            return win
        }
    }
  }

    let userScore = parseInt(0);
    let computerScore= parseInt(0);
    let win= 'You Win!';
    let lose= 'You Lose';
    let tie= 'You Tie';
    let winGame= 'You Win the Game!'
    let loseGame= 'You Lose the Game'

    for (let i=0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Your Score = ' + userScore)
        console.log("Computer's Score = " + computerScore)
        }
        if (userScore > computerScore){
            console.log(winGame)
        }
            else {
                console.log(loseGame)
            }
