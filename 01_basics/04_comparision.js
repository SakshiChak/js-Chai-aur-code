// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false

console.log(null >= 0);//true
/*Reason: equality check == and comparisions >,<,>=,<= works differently
          Comparisons converts null to a number , treating it as 0
*/

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

//The === operator is used for strict equality comparison. It not only compares the values but also checks if the data types are the same. 

console.log("2" === 2);