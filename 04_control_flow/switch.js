// Basic Syntax :
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    
        // If you omit the `break` keyword in a switch statement, the code will continue executing
        //  subsequent cases after a match until a `break` is encountered or until the end of the 
        // switch statement.

    default:
        console.log("default case match");
        break;
}