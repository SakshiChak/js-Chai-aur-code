// Example 1: Summing up an array of numbers using reduce
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// Use the reduce method to calculate the total sum
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

// Example 2: Calculating the total price of items in a shopping cart using reduce
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Use the reduce method to calculate the total price in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);