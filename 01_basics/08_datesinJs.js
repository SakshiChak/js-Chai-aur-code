// Dates and Time in JavaScript

// Create a new Date object representing the current date and time
let myDate = new Date();

// Different ways to display date and time
console.log(myDate.toString()); // Display the full date and time string in a standardized format
console.log(myDate.toDateString()); // Display the date string without the time information
console.log(myDate.toLocaleString()); // Display the localized date and time string based on the user's browser settings
console.log(myDate.toLocaleDateString()); // Display the localized date string only
console.log(typeof myDate); // Check the type of the Date object (it's an object)

// Create a new Date object with a specific date (Month starts with 0)
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Display the created date string

// Create a new Date object with a specific date and time
let anotherDate = new Date(2023, 0, 23, 5, 3);
console.log(anotherDate.toLocaleString()); // Display the created date and time string

// Create a new Date object from a string (Year-Month-Day format)
let myStringDate = new Date("2023-11-09");
console.log(myStringDate.toLocaleString()); // Display the date from the string

// Alternatively, create a new Date object from a string (Month-Day-Year format)
let anotherStringDate = new Date("01-14-2023");
console.log(anotherStringDate.toLocaleString()); // Display the date from the string

// Get the current timestamp in milliseconds since January 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// Get the timestamp for a specific date in milliseconds
console.log(myCreatedDate.getTime());

// Get the current timestamp in seconds (divide by 1000)
console.log(Math.floor(Date.now() / 1000));

// Get information about the current date
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()); // Get the day of the month (1-31)
console.log(newDate.getMonth() + 1); // Get the month (Note: Month starts with 0, so add 1)
console.log(newDate.getDay()); // Get the day of the week (0 = Sunday, 1 = Monday, ...)
console.log(newDate.getFullYear()); // Get the full year (4 digits)

// Get the full weekday name for the current date
let weekday = newDate.toLocaleString('default', {
    weekday: 'long',
});
console.log(`Today is ${weekday}`);

console.log(newDate.toUTCString()); // Convert the date to a UTC string -->Thu, 09 Nov 2023 09:25:19 GMT

// Get current UTC time
let utcDate = new Date();

// Convert UTC time to Indian Standard Time (IST)
let istDateString = utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

// Print the result
console.log(`UTC Time: ${utcDate.toUTCString()}`);
console.log(`Indian Standard Time (IST): ${istDateString}`);

