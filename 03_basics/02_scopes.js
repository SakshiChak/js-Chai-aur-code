let a = 300
var c = 30
/*
var:
1.Function-scoped or globally scoped.
2.No block scope; accessible throughout the function.

let:
1.Block-scoped.
2.Limited to the block where it's defined.
*/

// This is a block with its own scope
if (true) {
    // Variable 'a' is declared again with the value 10 within this block (different scope)
    let a = 10
    // Variable 'b' is declared with the value 20 using 'const' within this block
    const b = 20
    var c = 50
    // Uncommenting the next line would log the value of 'a' within this block
    // console.log("INNER: ", a);
}

// Uncommenting the next three lines would log the values of 'a', 'b', and 'c' respectively
// console.log(a); //300
// console.log(b);  // 'b' is not accessible outside the block it was declared in
// console.log(c); //50

/* <---------------Nested Scope--------------> */
function one(){
    const username = "hitesh"

    // Function 'two' is declared inside 'one'
    function two(){
        const website = "youtube"
        // Uncommenting the next line would log the value of 'username' within 'two'
        console.log(username);
    }
    // Uncommenting the next line would result in an error as 'website' is not accessible here
    // console.log(website);

    // Call the function 'two'
    two()
}
// Call the function 'one'
one()


// Another block with its own scope
if (true) {
    const username = "hitesh"
    // Another block inside the previous one
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // Uncommenting the next line would result in an error as 'website' is not accessible here
    // console.log(website);
}

// Uncommenting the next line would result in an error as 'username' is not accessible here
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// This is a function declaration, so it can be called before it is defined
console.log(addone(5)) // No error

// Function 'addone' is declared
function addone(num){
    return num + 1
}

console.log(addone(5)) // Outputs 6

// This line will cause an error because 'addTwo' is a const with a function expression,
// and it is called before the declaration
console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

// Function 'addTwo' is declared using a function expression assigned to a constant
const addTwo = function(num){
    return num + 2
}

// addTwo(5) 
