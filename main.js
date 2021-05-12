let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');


function computerPlay() { 
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}


function playRound(playerSelection) {

    let computerSelection = computerPlay();
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
        
        playerScore += 1;
        result = `You Win! ${playerSelection} beats ${computerSelection}
        <br><br> Player Score: ${playerScore} 
        <br> Computer Score: ${computerScore}`;

        if (playerScore === 5) {

            result += '<br><br>You Won the Game!<br> Reload the page to play again';
            disableButtons();
            
        }
        
    } else if (playerSelection === computerSelection) {

        result = `The Game is a Tie! You both choose ${playerSelection}
        <br><br> Player Score: ${playerScore}
        <br> Computer Score: ${computerScore}`;

    } else {

        computerScore += 1;
        result = `You Lose! ${computerSelection} beats ${playerSelection}
        <br><br>Player Score: ${playerScore}<br> Computer Score: ${computerScore}`;

        if (computerScore === 5) {

        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()

        }

    }

    document.querySelector('.result').innerHTML = result;

    return;

};

buttons.forEach(button => {

    button.addEventListener('click', function () {

        playRound(button.value)
        
    })

});



