let ROCK = document.querySelector('#rock');
let PAPER = document.querySelector('#paper');
let SCISSORS = document.querySelector('#scissors');

let buttons =[ROCK,PAPER,SCISSORS];

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
        console.log(`Its a tie!`);

    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        addScore++;
    } else if(playerChoice === "PAPER" && computerChoice ==="ROCK"){
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        addScore++;
    }else if(playerChoice === "SCISSORS" && computerChoice ==="PAPER"){
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        addScore++;
    } else{
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    }
    
    return addScore;
};

buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        alert('it works!');
    })
})