let myName = 'Akshay'
console.log(myName.length)
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
console.log(myName.slice(1, 4)) // Both the ends are included  
// 0 1 2 3 4 5
// A K S H A Y

console.log(myName.slice(2, 5))

console.log(myName.replace('A', 'B'))

myName[0] = 'L'; // Not Allowed
console.log(myName)
