// Get the property descriptor of the "PI" property in the Math object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);//cannot modify the value of Math.PI

// Define an object 'chai' with properties like name, price, isAvailable, and orderChai function
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
    }
}

// Get the property descriptor of the "name" property in the 'chai' object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Define a new property descriptor for 'name' in 'chai'
Object.defineProperty(chai, 'name', {
    // writable: false, 
    enumerable: false, // Setting enumerable to false excludes the "name" property from iterations over the object's properties
});


// Get the updated property descriptor of the "name" property in the 'chai' object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterate over the properties of 'chai' and log key-value pairs for non-function properties
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
