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
        return`Its a tie!`;

    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        return`You win! ${playerChoice} beats ${computerChoice}!`;
        //addScore++;
    } else if(playerChoice === "PAPER" && computerChoice ==="ROCK"){
        return`You win! ${playerChoice} beats ${computerChoice}!`;
        //addScore++;
    }else if(playerChoice === "SCISSORS" && computerChoice ==="PAPER"){
        return `You win! ${playerChoice} beats ${computerChoice}!`;
        //addScore++;
    } else{
        return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
};

let reset = () => display.removeChild(spanDisplay);

// sets a event listener for each button in array
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
    let computerChoice = getComputerSelection();
    let playerChoice = button.id;
    display.innerText =`You picked ${playerChoice} and the computer picked ${computerChoice}\n The results: ${playRound(computerChoice,playerChoice)}`;
    });
});