// Prompt user and take input
// Generate computer input
// Compare user input and computer input
// Declare winner
// Prompt user with winner
// Re-prompt and take input


//Generate computer input
function computerPlay(){
    const answers = ['rock', 'paper', 'scissors'];
    return answers[Math.floor(Math.random() * answers.length)];
}

// Compare user input and computer input, declare winner
function playRound(playerSelection, computerSelection){
    //drop case of player choice
    const playerChoiceNoCase = playerSelection.toLowerCase();

    //make comparisons, always compare against computer, return string
    if (playerChoiceNoCase === computerSelection) {
        return (`Tie! You both have choosen \'${computerSelection}\'`);
    }
    else if ((playerChoiceNoCase === 'rock') && (computerSelection === 'paper')){
        return 'You lose! Paper beats rock';
    }
    else if ((playerChoiceNoCase === 'paper') && (computerSelection === 'rock')){
        return 'You win! Paper beats rock';
    }
    else if ((playerChoiceNoCase === 'scissors') && (computerSelection === 'rock')){
        return 'You lose! Rock beats scissors';
    }
    else if ((playerChoiceNoCase === 'rock') && (computerSelection === 'scissors')){
        return 'You win! Rock beats scissors';
    }
    else if ((playerChoiceNoCase === 'scissors') && (computerSelection === 'paper')){
        return 'You win! Scissors beats paper';
    }
    else if ((playerChoiceNoCase === 'paper') && (computerSelection === 'scissors')){
        return 'You lose! Scissors beats paper'
    }
    else {
        return 'Something has gone wrong! Tie!'
    }
}

function game(){
    // Prompt user, take input, play round, declare winner
    let score = 5;

    for  (let i = 0; i < 5; i++){
        let playerInput = prompt('Rock, Paper, or Scissors?');
        let computerInput = computerPlay();
        let roundResult = playRound(playerInput, computerInput);
        console.log(roundResult);
        
        if (roundResult.slice(0,8) === 'You win!'){
            score += 1;
        }
        else if (roundResult.slice(0,8) === 'You lose'){
            score -= 1;
        }
    }

    if (score > 5){
        console.log('You WIN!');
    }
    else if (score < 5){
        console.log('You LOSE!');
    }
    else {
        console.log('TIE!');
    }
}