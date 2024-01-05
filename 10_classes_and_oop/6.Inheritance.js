// Base class representing a user
class User {
    constructor(username){
        this.username = username;
    }

    // Method to log the username
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Subclass representing a teacher, inheriting from User
class Teacher extends User {
    constructor(username, email, password){
        // Call the constructor of the parent class (User) with the provided username
        super(username);
        
        // Additional properties for the Teacher class
        this.email = email;
        this.password = password;
    }

    // Additional method for the Teacher class
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");

// Invoke the logMe method inherited from the User class
chai.logMe(); // Outputs: USERNAME is chai

// Create an instance of the base User class
const masalaChai = new User("masalaChai");

// Invoke the logMe method of the User class
masalaChai.logMe(); // Outputs: USERNAME is masalaChai

// Check if the chai instance is an instance of the User class
console.log(chai instanceof User); // Outputs: true
