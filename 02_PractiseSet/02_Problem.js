/*
 Problem Statement: Demonstrate the use of switch case in Javascript

*/

const prompt = require('prompt-sync')();

let exp = prompt("Enter A Value between 1-7:)");

exp = Number.parseInt(exp)

switch (exp) {
    
    case 1: console.log("It's Sunday\n");
        break;
    
    case 2: console.log("It's Monday\n");
        break;
    case 3: console.log("It's Tuesday\n");
        break;
    case 4: console.log("It's Wednesday\n");
        break;
    case 5: console.log("It's Thursday\n");
        break;
    case 6: console.log("It's Friday\n");
        break;
    case 7: console.log("It's Saturday\n");
        break;
    
    default: console.log("Invalid Number Entered\n");

}