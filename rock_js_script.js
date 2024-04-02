/* 
A console version of rock paper scissors
itll get inputs from the user
the output should be the choice made by the user and by the computer..
.. stating weather the user won or lost
it will need a random option from the computer and the input from the..
..user to work properly. it will also need a function to determine the winner and..
display the results 
*/ 

// 1- rock 2-paper 3-scissors

// function that will make the computers random choice
let computerChoice = Math.floor(Math.random() * 3) + 1;
console.log(`comp pick was ${computerChoice}`);

// variable that will get the users choice ( make it case insensitive)
let playerChoice = prompt("Rock, Paper, or scissors?");
console.log(`player pick was ${playerChoice.toUpperCase()}`);

// function that plays a single round that uses the computer/user choices as parameters

// function that uses and loops five rounds of rock paper scissor