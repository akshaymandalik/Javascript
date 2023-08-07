/*
 Problem Statement: Write a Program to check whether the given number
 is divisible by 2 and 3.

*/

const prompt = require('prompt-sync')();

let iVal = prompt("Enter Any Number:)");
iVal = Number.parseInt(iVal);

if (iVal %2 == 0 && iVal %3 == 0) {
    console.log(iVal+" is divisible by both 2 and 3.");
} else {
        console.log(iVal+" is not divisible by both 2 and 3.");
}