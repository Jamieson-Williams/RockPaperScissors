// Create a function that randomly selects rock, paper or scissors (This is the computers move)
function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    compchoice = Math.floor(Math.random() * choices.length);
    return choices[compchoice]
}

// Set variables for playerSelection and computerSelection. These will be changed in the playRound function
let playerSelection = null
let computerSelection = null

// Use function game() to keep score of 5 rounds and report winner or loser at the end
function game() {
    playerScore = 0
    computerScore = 0

    // Game function will call the playRound function 5 times to play 5 different games
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    
    // At the end of the five games, this will report the final playerScore and computerScore back to the user
    console.log('Player Score:',playerScore,'Computer Score:',computerScore)

    // Return values so that they can be used in the condition to evaluate who won the game
    return playerScore, computerScore
    
    function playRound(playerSelection, computerSelection) {
        // Prompt user to choose rock, paper or scissors. Make case insensitive. Display user and computer choice. Putting the console.log statements in the 
        // function will print out the score and choices before EACH round.
        playerSelection = prompt('Enter rock, paper or scissors')
        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerPlay()
        computerSelection = computerSelection.toLowerCase()
        console.log('Player Score:',playerScore,'Computer Score:',computerScore)
        console.log('You selected', playerSelection)
        console.log('Computer selected',computerSelection)
        
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1
            return "You lose. Paper beats rock"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1
            return "You win. Rock beats scissors"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1
            return "You win. Paper beats rock"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1
            return "You lose. Scissors beats paper"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1
            return "You lose. Rock beats scissors"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1
            return "You win. Scissors beats paper"
        } else {
            return "It's a draw. You both selected the same choice"
        } 
    }
}

game();

// Announce winner
if (playerScore > computerScore) {
    console.log('Congratulations, you win. Play again?')
} else if (playerScore === computerScore) {
    console.log('It was a tie! Play again?')
} else (
    console.log('You lost! Play again?')
)


    

