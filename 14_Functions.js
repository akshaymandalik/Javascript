const prompt = require("prompt-sync")();


function sum( iNum1, iNum2) {

    return iNum1 + iNum2;
}

function main() {

    let iAns = 0;
    let iVal1 = prompt("Enter First Number:");
    let iVal2 = prompt("Enter Second Number:");
    iVal1 = Number.parseInt(iVal1);
    iVal2 = Number.parseInt(iVal2);

    iAns = sum(iVal1, iVal2);
    console.log("Addtion of " + iVal1 + " and " + iVal2 + " is " + iAns);

}

main();