const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach loop with a regular function
coding.forEach(function (val) {
    // console.log(val);
})


// Using forEach loop with an arrow function
coding.forEach((item) => {
    // console.log(item);
});


// Defining a function to print each item
function printMe(item) {
    // console.log(item);
}

// Using forEach loop with a named function
coding.forEach(printMe)

// Using forEach loop with an arrow function that also receives index and array parameters
coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
];

// Using forEach loop with an arrow function to iterate through each object in myCoding array
myCoding.forEach((item) => {
    console.log(item.languageName);
})