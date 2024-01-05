function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    /* SetUsername.call(this, username): invokes the SetUsername function on 
     the current object(this), passing the username as an argument.This 
     effectively sets the username property of the current object. */
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);