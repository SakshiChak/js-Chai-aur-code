let name = "sakshi"

// console.log(typeof name); //string
// let valueInName = Number(name);
// console.log(typeof valueInName); // number
// console.log(valueInName); // NaN

let score = "33abc";

// console.log(typeof score); // string
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN

let marks = null

// console.log(typeof (marks));// object
// let valueInMarks = Number(marks);
// console.log(typeof valueInMarks); // number
// console.log(valueInMarks); // 0

let age = undefined

// console.log(typeof age);// undefined
// let valueInAge = Number(age);
// console.log(typeof valueInAge); // number
// console.log(valueInAge); // NaN

let isLoggedIn = true

// console.log(typeof isLoggedIn);// boolean
// let valueInIsLoggedin = Number(isLoggedIn);
// console.log(typeof valueInIsLoggedin); // number
// console.log(valueInIsLoggedin); // 1

/* Convert into number */
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isEven = 1;

let booleanIsEven = Boolean(isEven);
console.log(booleanIsEven);//true

/* Convert into boolean */
// 1 => true; 0 => false
// "" => false
// "sakshi" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
