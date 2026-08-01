let name = "John Doe";
let age = 30;
let isStudent = true;
console.table([ name, age, isStudent ]);

// nuber => 2 to the power of 53
//bigint => 2 to the power of 63
//string => "Hello, World!"
//boolean => true or false
// nnull => represents the intentional absence of any object value
//undefined => represents a variable that has been declared but has not yet been assigned a value
// symbol => a unique and immutable primitive value that can be used as an identifier for object properties

//object => a collection of properties, where each property is a key-value pair

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
// this is a  some way to print the type of variable in console
console.log({ name: typeof name, age: typeof age, isStudent: typeof isStudent });
console.table([typeof name, typeof age, typeof isStudent]);

console.table({ name: typeof name, age: typeof age, isStudent: typeof isStudent });
