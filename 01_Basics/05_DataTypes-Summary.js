//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primative ) , heap (non primative)

// let MyYouTubename = " hitesh choudhary"
// let anotherName = MyYouTubename

// console.log({MyYouTubename, anotherName});

// MyYouTubename = "Code with harry"

// console.log({MyYouTubename, anotherName});

// +++++ heap example


let userOne = { name: "hitesh", age: 22 }
let userTwo = userOne

console.log({userOne, userTwo});

userOne.name = "Code with harry"

console.log({userOne, userTwo});