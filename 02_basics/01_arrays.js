// Arrays in JavaScript

// Creating arrays with elements
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

// Creating an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing array elements
console.log(myArr[1]);

// <-----------------Array methods--------------->

// Adding and removing elements from the end of an array
myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr);//[0, 1, 2, 3, 4, 5, 6]

// Adding and removing elements from the beginning of an array

// Add an element to the beginning of the array
myArr.unshift(9);
console.log(myArr);//[9, 0, 1, 2, 3, 4, 5, 6]

// Remove the first element from the array
myArr.shift();
console.log(myArr);//[0, 1, 2, 3,4, 5, 6]

// Checking if an array includes a specific element
console.log(myArr.includes(9));//false

// Finding the index of a specific element in an array
console.log(myArr.indexOf(3));

// Joining array elements into a string
const newArr = myArr.join();
console.log(newArr);//0,1,2,3,4,5

// Slice and Splice

console.log("Original Array:", myArr);//[ 0, 1, 2, 3, 4, 5 ]

// Slice: Creating a new array by extracting a portion of the original array
const myNew1 = myArr.slice(1, 3);
console.log("Slice Result (New Array):", myNew1);//[ 1, 2 ]
console.log("Original Array (Unchanged):", myArr);//[ 0, 1, 2, 3, 4, 5 ]

// Splice: Modifying the original array by removing or replacing elements
const myNew2 = myArr.splice(1, 3);
console.log("Splice Result (Removed Elements):", myNew2);// [ 1, 2, 3 ]
console.log("Original Array (Modified):", myArr);//[ 0, 4, 5 ]

// <-------------key points of slice and splice------>
/*
slice:

1.Returns a shallow copy of a portion of an array.
2.Does not modify the original array; creates a new one.
3.Takes two arguments: start index and end index (end index is exclusive).

splice:

1.Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
2.Modifies the original array in place.
3.Takes at least two arguments: start index and number of elements to remove.
*/
