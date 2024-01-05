// Array of superheroes
let myHeros = ["thor", "spiderman"]

// Object with superhero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Extend the Object prototype with a method
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Extend the Array prototype with a method
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// <---------Example usage------->
// myHeros.hitesh()
// heroPower.heyHitesh()
// myHeros.heyHitesh(); // Hitesh says hello
// heroPower.hitesh();  // hitesh is present in all objects
// heroPower.getSpiderPower();  // Spidy power is sling

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Inheriting properties from TeachingSupport
}

Teacher.__proto__ = User // Inheriting properties from User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

// The trueLength method is a custom method we added to the String prototype to make it easier to calculate and log the true length of a string.
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()