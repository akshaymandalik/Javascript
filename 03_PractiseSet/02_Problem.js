/*
    Problem Statement: Write a program to print the marks of a student 
    in an object using for in loop.

*/

let marks = {

    Pavan: 100,
    Akshay: 99,
    Sanket: 99,
    Sadanand: 100

}
console.log("Name\t\tMarks")
for (key in marks) {
    console.log(key+"\t\t"+marks[key])
}