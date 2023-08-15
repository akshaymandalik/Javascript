/*
  Problem Statement: Write a program to print "try again" 
  until the user enters the correct number
*/

const prompt = require("prompt-sync")();

function main() {
    
    let iInput = 0;

    iInput = prompt("Enter a correct Number:)");
    iInput = Number.parseInt(iInput);

    while (iInput != 5) {
        
        console.log("Try Again..");
        iInput = prompt(":)");
    }
   
    console.log("Great!! You found correct Number.");

}

main();