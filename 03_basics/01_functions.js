function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
// 'number1' and 'number2' are  parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// '3' and '5' are arguments passed to the 'addTwoNumbers' function

// Call the addTwoNumbers function and store the result in a variable
// console.log("Result: ", result);


// Function to generate a login message with a default username
function loginUserMessage(username = "sam") {
    // Check if username is not provided
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


// Function with a rest parameter to collect multiple arguments into an array
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// Object representing a user with username and prices
const user = {
    username: "hitesh",
    prices: 199
}

// Function to handle an object and log its properties
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// call the handleObject function with the 'user' object
handleObject(user)

// Call the handleObject function with an inline object
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

// Function to return the second value of an array
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// Log the second value of an inline array
console.log(returnSecondValue([200, 400, 500, 1000]));