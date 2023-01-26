#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}
async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation'); //Animation start
    await sleep();
    rainbowTitle.stop();
}
 await welcome()

async function askQuestion(){
    const answers = await inquirer
    .prompt([
    {
        type: "list",
        name: "operator",
        message: "Which operation you want to perform? \n",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] 
    },
    {
        type: "number",
        name: "num1",
        message: "Enter number 1:"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter number 2:"
    }
]);

if
(answers.operator == "Addition"){
    console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
}
else if 
(answers.operator == "Subtraction"){
    console.log(chalk.yellow(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
}
else if 
(answers.operator == "Multiplication"){
    console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
}
else if 
(answers.operator == "Division"){
    console.log(chalk.black(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
  }
};
//askQuestion()

async function startAgain() { 
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        })
    }
    while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES')
}
startAgain();