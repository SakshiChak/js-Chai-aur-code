// Base User class
class User {
    // Constructor to initialize the username property
    constructor(username){
        this.username = username;
    }

    // Method to log the username
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Static method to create an ID (not related to an instance but can be called on the class itself)
    static createId(){
        return `123`;
    }
}

// Create an instance of the User class
const hitesh = new User("hitesh");

// Uncommenting the line below would result in an error since createId is a static method
// console.log(hitesh.createId());

// Subclass Teacher extending User
class Teacher extends User {
    // Constructor for Teacher, extending User's constructor
    constructor(username, email){
        // Call the parent class's constructor using super
        super(username);
        // Initialize the email property specific to Teacher
        this.email = email;
    }
}

// Create an instance of the Teacher class
const iphone = new Teacher("iphone", "i@phone.com");

// Access the static method createId through the Teacher class
console.log(Teacher.createId());//gives an error since createId is a static method
