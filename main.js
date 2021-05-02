//this function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors"
function computerPlay() { 
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//console.log(computerPlay());

//final result of the game
function game() {

    let playerSelection = prompt("Please enter either Rock, Paper or Scissors: ");//user choice
    let computerSelection = computerPlay(); //computer choice

    //logic of the game
    function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            return "The Game is a Tie!";
        };
        //checking for "Rock"
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors";
            }
        };
        //checking for "Paper"
        if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Win! Paper beats Rock";
            }
        };
        //checking for "Scissors"
        if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You Win! Scissors beats Paper";
            }
        }

        //alternative logic of the game

        /*
        if (playerSelection === computerSelection) {
            return "Game is a Tie";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You Lose!";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You Win!";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You Lose!";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You Win!";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You Lose!";
        } else {
            return "You Win!";
        }  
         */      
    };

    console.log(playRound(playerSelection, computerSelection)); //print the retult

};

game(); //call the final result of the game


