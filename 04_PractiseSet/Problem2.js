// Explore the Includes, StartsWith, EndsWith Methods of a String

let Statement = "Akshay is a System Programmer"

let isfound = Statement.includes('System');
console.log(isfound)

// includes methods searches for the given character,substring,string in the given string.
// return true if the substring is found and false if not.

let isStarts = Statement.startsWith('Aakash')
console.log(isStarts);

// lets write a startswithX function:

function startswithX(string1,string2) {

    for(iCnt in string2) {

        if (string1[iCnt] != string2[iCnt]) {
            return false;
        }
    }

    return true;

}

let isStartswith = startswithX("Akshay is the best programmer", 'Aakash')
console.log(isStartswith)


Statement = "AM Groups is the biggest group of companies in the world!!"
let isend = Statement.endsWith("world!!");
console.log(isend);


// 3nhi pan Case Sensitive search kartat