const chalk = require("chalk");
const { read } = require("fs");
const readLine = require("readline").createInterface({
  output: process.stdout,
  input: process.stdin,
});
let count = 1;
const limit = 3;
const randomNumber = Math.round(Math.random() * 10);
console.log(chalk.bold.green("The game started"));
const game = () => {
  if (count <= limit) {
    readLine.question(chalk.bold.cyan("Enter your number\n"), (number) => {
      if (number == randomNumber) {
        console.log(chalk.bold.red("Your won"));
        readLine.close();
      }
      if (number > randomNumber) {
        console.log(chalk.bold.green("Your number too big"));
        count += 1;
        game();
      }
      if (number < randomNumber) {
        console.log(chalk.bold.green("Your number too less"));
        count += 1;
        game();
      }
    });
  } else {
    console.log(chalk.bold.red("Your loseeeer", randomNumber));
    readLine.close();
  }
};
game();
