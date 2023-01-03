#!usr/bin/env node

import inquirer from 'inquirer';

function generateRandomNumber() {
    return Math.floor(Math.random() + 10) + 1;
}

let computerScore = 0;
let userScore = 0;
 
async function main() {
    const response = await inquirer.prompt({
        message: "guess a number (1 to 10)",
        type: "number",
        name: "userInput"
    });

    const computerNumber = generateRandomNumber();
    const userNumber = response.userInput;

    if (computerNumber === userNumber) {
        console.log("you guess the riht number ");
        userScore++;
    }
    else {
        console.log("your guess is wrong");
        computerScore++;
        
    }

    console.log("computer number" , computerNumber);  //number that computer choose
    console.log("user number", userNumber);  //number that user choose
    
    console.log("computerScore", computerScore);   //result
    console.log("userScore", userScore);   //result
    
    const guessAgain = await inquirer.prompt({
       message: "do you want to guess again :",
       type: "list",
       choices: ["yes", "no"],
       name: "guessInput",
        
    });
    
    if (guessAgain.guessInput === "yes") {
        main();
    }
}
main();