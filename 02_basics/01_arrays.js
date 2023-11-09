// Arrays in JavaScript

// Creating arrays with elements
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

// Creating an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing array elements
console.log(myArr[1]);

// Array methods

// Adding and removing elements from the end of an array
myArr.push(6);
myArr.push(7);
myArr.pop();

// Adding and removing elements from the beginning of an array

// Add an element to the beginning of the array
myArr.unshift(9);
console.log(myArr);//[9, 0, 1, 2,3, 4, 5, 6]

// Remove the first element from the array
myArr.shift();
console.log(myArr);//[0, 1, 2, 3,4, 5, 6]

// Checking if an array includes a specific element
console.log(myArr.includes(9));

// Finding the index of a specific element in an array
console.log(myArr.indexOf(3));

// Joining array elements into a string
const newArr = myArr.join();
console.log(newArr);//0,1,2,3,4,5

// Slice and Splice

console.log("A ", myArr);//[ 0, 1, 2, 3, 4, 5 ]

// Slice: Creating a new array by extracting a portion of the original array
const myNew1 = myArr.slice(1, 3);
console.log("Slice Result (New Array):", myNew1);//[ 1, 2 ]
console.log("Original Array (Unchanged):", myArr);//[ 0, 1, 2, 3, 4, 5 ]

// Splice: Modifying the original array by removing or replacing elements
const myNew2 = myArr.splice(1, 3);
console.log("Splice Result (Removed Elements):", myNew2);// [ 1, 2, 3 ]
console.log("Original Array (Modified):", myArr);//[ 0, 4, 5 ]
