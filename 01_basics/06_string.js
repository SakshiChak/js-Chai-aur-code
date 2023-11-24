const name = "sakshichak";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com');

// console.log(gameName.__proto__);

//console.log(gameName[0]);//h
console.log(gameName.length);//13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));//e
// console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4)
// console.log(newString);//hite

const anotherString = name.slice(-8, 6)
console.log(anotherString);//kshi

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove  whitespace from both the ends of a string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
