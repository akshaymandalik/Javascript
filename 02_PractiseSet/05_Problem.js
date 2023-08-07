/*
 Problem Statement: Print
" You can Drive" or " You cannot Drive" based on
 age being greater than 18 using ternary operator.

*/

const prompt = require('prompt-sync')();

let Age = prompt("Enter your age:)");
Age = Number.parseInt(Age);

Age > 18 ? console.log("You can Drive") : console.log("You cannot Drive");