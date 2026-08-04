const  myArray = [1,3,5,6,78,9,10,11,12,13,14,15,16,17,18,19,20];
// // console.log(myArray);
// myArray.push(99);
// myArray.push(100);
// myArray.pop();
// myArray.unshift(0);// value at beggining .
// myArray.unshift(56);
// myArray.shift();// value at beginning remove.

// console.log(myArray);

// //console.log(myArray.includes(23));// it is use to check the value is present in array or not. it return true or false.
// //console.log(myArray.indexOf(2));// it is use to find the index of a value in array. if value is not present then it return -1.




// const myHero = ["Ironman", "Thor", "Hulk", "Captain America", "Black Panther", "Doctor Strange"];


// console.log(myHero[1]);

// const newArr = myArray.join();
// console.log(newArr);
// console.log(typeof(newArr));


// Slice ,Splice 
 console.log("A", myArray);
const myn1 = myArray.slice(1,3);// it is use to get the value from array from index 1 to 3 but not include 3.

console.log(myn1);
console.log("B", myArray);
const myn2 = myArray.splice(1,3);// it is use to get the value from array from index 1 to 3 but include 3 and also remove the value from original array.
console.log(myn2);
console.log("C", myArray);









