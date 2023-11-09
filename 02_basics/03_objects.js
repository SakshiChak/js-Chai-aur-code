// Singleton
// Object.create

// Object Literals
// Creating a JavaScript user object with various properties

const mySym = Symbol("key1"); // Using Symbol for a unique property key

const JsUser = {
    name: "Hitesh", // String property
    "full name": "Hitesh Choudhary", // Property with spaces
    [mySym]: "mykey1", // Property with Symbol key
    age: 18, // Numeric property
    location: "Jaipur", // String property
    email: "hitesh@google.com", // String property
    isLoggedIn: false, // Boolean property
    lastLoginDays: ["Monday", "Saturday"] // Array property
}

// Accessing object properties
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// Modifying object property
JsUser.email = "hitesh@chatgpt.com";

// Attempting to change a frozen object 
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);

// Adding methods to the object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// Note: In the 'greetingTwo' method, 'this' is used to refer to the current object (JsUser), allowing access to its properties.

// Calling object methods
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
