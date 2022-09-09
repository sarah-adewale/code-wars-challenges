const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

//filter method
const filteredItems = items.filter((item) => {
    return item.price <= 100 //filters out items with price less than or equal to 100
})

console.log(filteredItems)

//map method
const itemNames = items.map((item) => {
    return item.name //returns the names 
})

console.log(itemNames)

// the find method allows you find a single item in an array
const foundItems = items.find((item) => {
    return item.name === 'Album' 
})

console.log(foundItems)// returns only items with the name 'Album

// forEach does not return anything
items.forEach((item) => {
    console.log(item.price) //returns the price for all items
})

// some method returns a boolean
const hasInexpensiveItems = items.some((item) =>{
    return item.price <= -100 //returns false 
}) 

console.log(hasInexpensiveItems)


// every is similar to some, but different in that instead of checking an item, it checks every single item
const hasItems = items.every((item) =>{
    return item.price <= 1000 //returns true because all the prices are less than or equal to 1000
}) 

console.log(hasItems)


// reduce method
const total = items.reduce((acc, item) => item.price + acc, 0)
console.log(total) //returns the sum of the prices

// includes method
const newItems = [1,2,3,4,5]

const includesTwo = items.includes(2) //returns true
console.log(includesTwo)