const accountId =123456
let accountEmail = "user@example.com"
var accountPassword = "securePassword123"
let accountCity = "New York" // This will throw an error because accountCity is not declared with var, let, or const
let accountState;

//accountId = 789012; // This will throw an error because accountId is a constant and cannot be reassigned

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
console.table() is a method that displays tabular data in the console. It can be used to log arrays or objects in a more readable format, making it easier to visualize the data structure and its contents.
*/

/*
 prefer const over let and var for variables that won't be reassigned, as it provides better code clarity and prevents accidental reassignment. Use let for variables that may change, and avoid using var due to its function-scoped behavior which can lead to unexpected results.
*/