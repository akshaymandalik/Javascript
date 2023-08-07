const prompt = require('prompt-sync')();

let iVal = prompt("What is your age:")
iVal = Number.parseInt(iVal)


if (iVal >= 18)
    console.log("You can drive the car/motorcycle.")
else
    console.log("You can't drive car/motorcycle.")