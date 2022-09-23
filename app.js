// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is Krsha!!!!");
// fs.appendFileSync("notes.txt", "My age is 23 years old");

// const sum = require("./utils.js");
// console.log(sum(2, 3));

//============== Modules ===============//
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");
//============== Using my Own Module ===============//
// console.log(getNotes("I live here!"));
//============== using Validator module ===============//
// console.log(validator.isEmail("kariimkiko%gmail.com"));
// console.log(validator.isEmail("kariimkiko@gmail.com"));
// console.log(validator.isURL("krkr.io"));
// console.log(validator.isURL("https://krkr.io"));
// console.log(validator.isURL("https:/krkr.io"));
//============== Using Chalk Module ===============//
// const failure = chalk.bold.red.inverse("faaaail!!!!");
// console.log(chalk.blue.bgYellowBright("Okkaaaa"));
// console.log(chalk.green.inverse("succeed"));
// console.log(failure);
//============== Using Nodemon Module globally ===============//
// console.log(chalk.bold.green.inverse("here is nodemon"));
//============== command line arguments process.argv ===============//
// console.log(process.argv[2]);
const command = process.argv[2];
command === "add"
    ? console.log(chalk.green.inverse("Adding Note!"))
    : command === "remove"
    ? console.log(chalk.red.inverse("Removing Note!"))
    : console.log(chalk.white.inverse("Enter a command!"));
/*
const result = process.argv[3];
result >= 0
    ? (result == 0 ? console.log('Zero!!') : console.log('Positive!!') )
    : console.log('Negative!') 
//------- OR --------//
const result = 
process.argv[3] >= 0
    ? (process.argv[3] == 0 ? 'Zero' : 'Positive')
    :'Negative'
console.log(result)
*/
console.log(process.argv)