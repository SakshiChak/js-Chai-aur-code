const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values in JavaScript
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values in JavaScript
// "0", 'false', " ", [], {}, function(){}


// Check if the array is empty using the length property
/*
if (userEmail.length === 0) {
    console.log("Array is empty");
}
*/

const emptyObj = {}

// Check if an object is empty by examining its keys
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is
// null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")