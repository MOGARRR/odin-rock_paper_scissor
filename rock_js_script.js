/* 
A console version of rock paper scissors
itll get inputs from the user
the output should be the choice made by the user and by the computer..
.. stating weather the user won or lost
it will need a random option from the computer and the input from the..
..user to work properly. it will also need a function to determine the winner and..
display the results 
*/ 

// function that will make the computers random choice and switch case to convert it to strings


function getComputerSelection(){
    let computerNum = Math.floor(Math.random() * 3) + 1;
    if(computerNum === 1){
        return "ROCK"
    } else if(computerNum === 2){
        return "PAPER"
    } else if(computerNum === 3){
        return "SCISSORS"
    }
}
// function that plays a single round that uses the computer/user choices as parameters


function playRound (computerChoice,playerChoice){

     if(playerChoice === computerChoice){
        return console.log(`Its a tie!`)

    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        return console.log(`You win! ${playerChoice} beats ${computerChoice}!`);

    } else if(playerChoice === "PAPER" && computerChoice ==="ROCK"){
        return console.log(`You win! ${playerChoice} beats ${computerChoice}!`);

    }else if(playerChoice === "SCISSORS" && computerChoice ==="PAPER"){
        return console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
    } else{
        return console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    }
}
// function that uses and loops five rounds of rock paper scissor
function playGame(){
    for (i = 0; i < 5; i++){

        let playerChoice = prompt("Rock Paper or Scissors?").toUpperCase();
        console.log(`users choice was ${playerChoice}`);

        let computerChoice = getComputerSelection();
        console.log(`comps choice was ${computerChoice}`);
        
        console.log(playRound(computerChoice,playerChoice));
    }
}
playGame();