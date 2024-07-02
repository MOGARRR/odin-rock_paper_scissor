// Gets button nodelist and then turns it into an array for array methods
let buttons = document.querySelectorAll('button');
Array.from(buttons);

let display = document.querySelector('#display');
let addScore = 0; 


// outputs a num between 1-3 and returns a corelating string
function getComputerSelection(){
    let computerNum = Math.floor(Math.random() * 3) + 1;
    if(computerNum === 1){
        return "ROCK";
    } else if(computerNum === 2){
        return "PAPER";
    } else if(computerNum === 3){
        return "SCISSORS";
    }
} 
// runs a single round while keeping score. display current result of each game
function playRound (computerChoice,playerChoice){

     if(playerChoice === computerChoice){
        return[`Its a tie!`, addScore];

    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        return [`You win! ${playerChoice} beats ${computerChoice}!`, addScore ++];
        
    } else if(playerChoice === "PAPER" && computerChoice ==="ROCK"){
        return[`You win! ${playerChoice} beats ${computerChoice}!`, addScore++];
        
    }else if(playerChoice === "SCISSORS" && computerChoice ==="PAPER"){
        return [`You win! ${playerChoice} beats ${computerChoice}!`, addScore ++];

    } else{
        return [`You lost! ${computerChoice} beats ${playerChoice}`, addScore];
    }
};



// sets a event listener for each button in array
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
    let computerChoice = getComputerSelection();
    let playerChoice = button.id;
    let result = playRound(computerChoice,playerChoice);
    display.innerText =`You picked ${playerChoice} and the computer picked ${computerChoice}\n The results: ${result[0]}`;
    
    let scoreBoard = document.createElement('div');
    if(addScore < 5){
    scoreBoard.textContent = `Your current score is ${addScore}`;
} else {
    scoreBoard.textContent = `YOU WON! YOU GOT ${addScore} POINTS!!!`;
}
    display.appendChild(scoreBoard);

});
});