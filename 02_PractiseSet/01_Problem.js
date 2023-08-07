/*
    Problem Statement: Use Logical operators to check whether
    the age of person lies between 10 and 20?
*/

const prompt = require("prompt-sync")();

let Age = prompt("Enter Your Age:");
if (Age >10 && Age<20) {
    console.log("Age is between 10 and 20");
} else {
    console.log("Age is not between 10 and 20");
}
