/*
    Problem Statement: Write a program to print the marks of a student 
    in an object using for loop.

*/

let marks = {

    Pavan: 100,
    Akshay: 99,
    Sanket: 99,
    Sadanand: 100

}
console.log("Name\t\tMarks")

for (let iCnt = 0; iCnt < Object.keys(marks).length;iCnt++){
    
    console.log(Object.keys(marks)[iCnt]+"\t\t"+marks[Object.keys(marks)[iCnt]]);
}