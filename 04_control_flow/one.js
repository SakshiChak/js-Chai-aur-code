// Variables
const isUserLoggedIn = true;
const temperature = 41;

// Basic if-else statement
/*
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
*/

// Commented out code
// console.log("Execute");

// Comparison operators
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;


// If statement with block and local variable
/*
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
*/

// console.log(`User power: ${power}`); // This would result in an error because 'power' is not accessible outside the if block


// If statement without braces
/*
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
*/


//  if-else ladder
/*
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750"); // Typo in the comment, should be "less than 900"
} else {
    console.log("less than 1200");
}
*/

// Logical operators
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Logical AND operator
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// Logical OR operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
