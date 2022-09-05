let choices = ['Rock','Paper','Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
function playRound(playerSelection, computerSelection){
    return 'You Lose! Paper beats Rock';
}
let playerSelection = prompt('Rock, Paper or Scissors')
const computerSelection = getComputerChoice();


function game(){
playRound()
console.log(game())
}