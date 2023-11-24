// Define a user object with properties: username, price, and a welcomeMessage method
const user = {
    username: "hitesh",
    price: 999,

    // Method to display a welcome message
    welcomeMessage: function() {
        // 'this' keyword tells about current context
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// Uncomment the following lines to test and modify the user object
// user.welcomeMessage(); // Call the welcomeMessage method
// user.username = "sam"; // Change the username property(context)
// user.welcomeMessage(); // Call the welcomeMessage method again

//  'this' in the global context
// console.log(this); //this refers an empty object i.e.{}
/* In browser, global object is window object */

//  'this' in a regular function
// function chai() {
//     let username = "hitesh";
// console.log(this.username);//undefined(because function is not a method of an object.)
// }
// chai();

//  'this' in an arrow function
// const chai = () => {
//     let username = "hitesh";
//     console.log(this);//{}
// }
// chai();

/* <-------- Implicit and Explicit return --------------> */

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) //implicit return

//  an arrow function returning an object

// const addTwo = (num1, num2) => {username: "hitesh"};// undefined (needed to wrap obj in parenthesis)
const addTwo = (num1, num2) => ({username: "hitesh"});
console.log(addTwo(3, 4));

//  forEach method on an array
// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach()
