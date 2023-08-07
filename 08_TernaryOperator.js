const prompt = require('prompt-sync')();
let iNum = prompt("Enter a Number:");
iNum = Number.parseInt(iNum);

iNum % 2 == 0 ? console.log("Even") : console.log("Odd");