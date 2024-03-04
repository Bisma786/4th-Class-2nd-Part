import inquirer from "inquirer";
import chalk from "chalk";
let answers =await inquirer.prompt({
    name:"age",
    type:"number",
    message:"Enter your age"
})
console.log(chalk.yellow("I'll be "+(80-answers.age)+"\n years in the coming 40 years! "));
