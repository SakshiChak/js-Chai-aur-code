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
// console.log(booleanIsEven);//true

/* Convert into boolean */
// 1 => true; 0 => false
// "" => false
// "sakshi" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);


// <--------------------- Operations ------------------------>

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(4/2);
// console.log(5%2);

let str1 = "hello"
let str2 = " sakshi"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

// console.log((3 + 4) * 5 % 3);

/* not prefer to use this */
// console.log(+true);//1
// console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2; //inconsistence code

//<-----------Prefix & Postfix Operation------------>

let gameCounter = 100
gameCounter++;
console.log(gameCounter);//101

let gameScore = 100
++gameScore;
console.log(gameScore);//101

let x = 3;
const y = x++;//Postfix

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;//Prefix

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"





