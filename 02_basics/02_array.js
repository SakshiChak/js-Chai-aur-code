// Define arrays of Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Try to push DC heroes array into Marvel heroes array (doesn't work as expected)
// marvel_heros.push(dc_heros)

// Access an undefined index in Marvel heroes array (undefined)
// console.log(marvel_heros[3][1]);

// Concatenate Marvel and DC heroes arrays using concat method
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Combine Marvel and DC heroes arrays using the spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// Nested array with multiple levels
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flatten the nested array using flat method with Infinity depth
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Check if a string is an array (false)
console.log(Array.isArray("Hitesh"))

// Convert a string into an array of characters
console.log(Array.from("Hitesh"))

// Convert an object into an array (array of [undefined])
console.log(Array.from({name: "hitesh"})) // interesting

// Create an array of scores using Array.of method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//returns a new array from set of elements
