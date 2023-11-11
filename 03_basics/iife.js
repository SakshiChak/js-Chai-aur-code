// Immediately Invoked Function Expressions (IIFE)
/* IIFE is often used to create a private scope for variables to avoid polluting the global scope */

// Immediately Invoked Function Expression (IIFE) with a named function
(function chai() {
    // This is a named IIFE
    console.log(`DB CONNECTED`);
})();
//  IIFE is invoked but doesn't know where we stop the context due to this semicolon 
// after the first IIFE is essential to terminate the previous statement

// Immediately Invoked Function Expression (IIFE) with an arrow function and an argument
((name) => {
    // This is an IIFE with an arrow function taking an argument 'name'
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh') 
