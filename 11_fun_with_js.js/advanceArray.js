// Continuous vs Holey Arrays in JavaScript

// SMI (Small Integer)
// Double (Float)
// Packed Element (Float, String, Function)

const arrTwo = [1, 2, 3, 4, 5];
// Initial array with small integers: PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
// Adding a float: PACKED_DOUBLE_ELEMENTS

arrTwo.push('7');
// Adding a string: PACKED_ELEMENTS

arrTwo[10] = 11;
// Introducing a hole by skipping indices: HOLEY_ELEMENTS

console.log(arrTwo); // [1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11]
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined

// Bounds check in arrays
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// Holes are very expensive in JavaScript due to additional checks and memory handling

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]); // Accessing element at index 2: 3

// Optimization Categories for Arrays
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// Creating an array with 3 holes: HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // Adding a string: HOLEY_ELEMENTS
arrFour[1] = '2'; // Adding another string: HOLEY_ELEMENTS
arrFour[2] = '3'; // Adding another string: HOLEY_ELEMENTS

const arrFive = [];
arrFive.push('1'); // Adding a string to an empty array: PACKED_ELEMENTS
arrFive.push('2'); // Adding another string: PACKED_ELEMENTS
arrFive.push('3'); // Adding another string: PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(NaN); // Adding NaN: PACKED_DOUBLE_ELEMENTS
arrSix.push(Infinity); // Adding Infinity: PACKED_DOUBLE_ELEMENTS

/* 

Important Notes:

1. Packed arrays are more efficient as they have no holes and elements are stored 
contiguously.
2. Holey arrays introduce gaps which are inefficient as the engine has to perform 
additional checks.
3. Arrays transition from SMI (small integers) to DOUBLE (floats) to PACKED (mixed
 types) based on the elements added.
4. Managing array types efficiently can lead to significant performance 
improvements.

*/
