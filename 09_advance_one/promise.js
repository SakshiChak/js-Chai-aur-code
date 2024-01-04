const promiseOne = new Promise(function (resolve, reject) {
	// Do an async task (e.g., DB calls, cryptography, network)
	setTimeout(function () {
		console.log("Async task is compelete");
		resolve(); // Resolve the promise after the async task is complete
	}, 1000);
});

promiseOne.then(function () {
	console.log("Promise consumed");
});

//Example-2
new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("Async task 2");
		resolve();
	}, 1000);
}).then(function () {
	console.log("Async 2 resolved");
});

//Example-3
const promiseThree = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve({ username: "Chai", email: "chai@example.com" });
	}, 1000);
});

promiseThree.then(function (user) {
	console.log(user);
});

//Example-4
const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "hitesh", password: "123" }); // Resolve with user information
		} else {
			reject("ERROR: Something went wrong"); // Reject the promise with an error message
		}
	}, 1000);
});

// Chaining Promises:

// .then() can be chained to handle the result of a previous promise.
// Multiple .then() calls create a promise chain.
// return in a .then() can pass a value to the next .then() in the chain.

promiseFour
	.then((user) => {
		console.log(user);
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch(function (error) {
		console.log(error); // Catch any errors that occurred during the promise chain
	})
	.finally(() => console.log("The promise is either resolved or rejected"));

// Example 5
const promiseFive = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "javascript", password: "123" });
		} else {
			reject("ERROR: JS went wrong");
		}
	}, 1000);
});

// Async/Await :

// Async function to consume promiseFive
// async functions return promises implicitly.
// await is used to wait for a promise to settle and can be used inside async functions.
// try-catch blocks are used to handle errors in asynchronous operations.
async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log(error); // Catch any errors that occurred during the asynchronous operation
	}
}

consumePromiseFive();

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
*/

// Fetch example using GitHub API

// fetch() is used to make network requests and returns a promise.
// .then() is used to handle the response, and .catch() is used for error handling.
fetch("https://api.github.com/users/hiteshchoudhary")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => console.log(error)); // Handle errors that may occur during the fetch operation

// promise.all
// yes this is also available, kuch reading aap b kro.

/* Summary

Promise Creation :

1.Promises are objects representing the eventual completion or failure of an asynchronous operation.
2.new Promise(function(resolve, reject) {...}) is used to create a promise.
3.resolve() is called to fulfill the promise, and reject() is called to reject it.

Promise Consumption :

1-.then(onFulfilled) is used to handle the successful resolution of a promise.
2-.catch(onRejected) is used to handle errors during the promise chain.
3-.finally(onFinally) is used to execute code whether the promise is resolved or rejected.

*/
