// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is Krsha!!!!");
// fs.appendFileSync("notes.txt", "My age is 23 years old");

// const sum = require("./utils.js");
// console.log(sum(2, 3));

//============== Modules ===============//
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs/yargs")(hideBin(process.argv)); // === (const yargs = require("yargs/yargs")(process.argv.slice(2));)
const argv = yargs.argv;
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
/*
const command = process.argv[2];
command === "add"
    ? console.log(chalk.green.inverse("Adding Note!"))
    : command === "remove"
    ? console.log(chalk.red.inverse("Removing Note!"))
    : console.log(chalk.white.inverse("Enter a command!"));
*/
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
//console.log(process.argv);
//console.log(argv);

// Customize yargs version
// yargs.version('1.1.0')

// Create add command

yargs.command("add", "Add a new note", () => {
    console.log(chalk.bold.green.inverse("Adding a new Noteee!!!"));
}).argv;

// Create remove command
yargs.command("remove", "Remove a note", () => {
    console.log(chalk.bold.red.inverse("Removing a note!!"));
}).argv;

// Create read command
yargs.command("read", "Read a note", () => {
    console.log(chalk.bold.magenta.inverse("Reading a note"), argv.title);
}).argv;

// Create a list command
yargs.command("list", "List the notes", () => {
    console.log(chalk.bold.yellow.inverse("Listing your Notes!!"));
}).argv;
console.log(__dirname)