/*
 Problem Statement: Write a function to find a mean of 5 numbers
*/

const prompt = require("prompt-sync")();   

const findmean = (iVal1, iVal2, iVal3, iVal4, iVal5) => {
    return (iVal1 + iVal2 + iVal3 + iVal4 + iVal5) / 5;
}


function main() {

    let iNum1 = prompt("Enter First Number:)");
    let iNum2 = prompt("Enter Second Number:)");
    let iNum3 = prompt("Enter Third Number:)");
    let iNum4 = prompt("Enter Fourth Number:)");
    let iNum5 = prompt("Enter Fifth Number:)");

    iNum1 = Number.parseInt(iNum1);
    iNum2 = Number.parseInt(iNum2);
    iNum3 = Number.parseInt(iNum3);
    iNum4 = Number.parseInt(iNum4);
    iNum5 = Number.parseInt(iNum5);

    let mean = findmean(iNum1, iNum2, iNum3, iNum4, iNum5);

    console.log("The mean is "+mean);

}   
main();