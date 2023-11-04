#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Please write your guess between 1 to 10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, "Sys");
if (userGuess === systemGeneratedNo) {
    console.log("Congrats, Your answer is correct.You Win!");
}
else {
    console.log("Please try again better luck next time!");
}
