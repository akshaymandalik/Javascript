const prompt = require('prompt-sync')();

let iVal = prompt("Enter a Number between (1-7):");

switch (iVal) {
    
    case '1': console.log("Sunday");
        break;
    case '2': console.log("Monday");
        break;
    case '3': console.log("Tuesday");
        break;
    case '4': console.log("Wednesday");
        break;
    case '5': console.log("Thursday");
        break;
    case '6': console.log("Friday");
        break;
    case '7': console.log("Friday");
        break;
    default: console.log("Invalid Entry\n");
        break;
}