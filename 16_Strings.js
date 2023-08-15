let Name = "Akshay";
let length = Name.length;

// Printing Name
console.log(Name);

// Printing Length of String
console.log(length);

// String can be created using single quote too.

let College_Name = 'VIIT,Pune'
console.log("College Name:" + College_Name)

// Accessing each character in String

for(ch of Name){

    console.log(ch);
}

for(ch in Name){

    console.log(Name[ch]);
}