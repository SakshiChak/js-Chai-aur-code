// Creating a Tinder user object using object literal syntax
// const tinderUser = {};//non-sigleton object
const tinderUser = new Object();//Singleton object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// This prints an array of all property keys in the 'tinderUser' object.
// console.log(Object.keys(tinderUser));

// This prints an array of all property values in the 'tinderUser' object.
// console.log(Object.values(tinderUser));

// Prints an array of key-value pairs of the 'tinderUser' object using Object.entries()
// console.log(Object.entries(tinderUser));

// Checking if 'tinderUser' has a specific property 'isLoggedIn' using hasOwnProperty()
// Returns true if the property exists, false otherwise.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Creating a regular user object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested properties in the regularUser object
// console.log(regularUser.fullname.userfullname.firstname);


// Combining multiple objects using the spread operator
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = { 5: "a", 6: "b" };

/*  Attempt to create an object 'obj3' with 'obj1' and 'obj2' as properties */
// const obj3 = { obj1, obj2 }

/* Using Object.assign to merge the properties of 'obj1', 'obj2', and 'obj4' into a new object 'obj3'.*/
// const obj3 = Object.assign({}, obj1, obj2, obj4) //This creates a new object by copying the properties of 'obj1', 'obj2', and 'obj4' into an empty object ({})

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// Accessing a specific email in an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Accessing  the email of the user at index 1 in the 'users' array
// console.log(users[1].email);


// Destructuring assignment to extract a property from an object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Extracting the 'courseInstructor' property using destructuring
const { courseInstructor: instructor } = course;

// console.log(course.courseInstructor);
// console.log(instructor);//destructure of object

// JSON-like structure with comments for better understanding
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// Array of empty objects 
const arrayOfObjects = [
    {},
    {},
    {}
]
