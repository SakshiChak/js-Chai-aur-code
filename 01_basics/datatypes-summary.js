// <-------------------Primitive Data Types--------------------->

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.log(typeof score);//number
console.log(typeof scoreValue);//number
console.log(typeof isLoggedIn);//boolean
console.log(typeof outsideTemp);//object
console.log(typeof userEmail);//undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//false

console.log(typeof id);//symbol

const bigNumber = 9007199254740991n //add n at last to make it bigInt
console.log(typeof bigNumber);//bigint

//<------------------ Reference(Non-Primitive) Data Types ----------------->

// Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "spiderman"];
console.log(typeof heros);//object

let myObj={
    name: "hitesh",
    age:22,
}
console.log(typeof myObj);//object

const myFunction = function () {
    console.log("Hello World!");
}
// myFunction();//func call
console.log(typeof myFunction);//function

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*Javascript is a dynamic typing language. When you declare a variable, 
you do not need to specify what type this variable is.
 Javascript engine infers what type this variable is based on the value assigned to at run time.
*/

