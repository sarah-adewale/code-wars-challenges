// Create a method that accepts a list and an item, and returns true if the item 
// belongs to the list, otherwise false.

//arr and value(number)
//return boolean



//create a function
//create a loop to check if value is included in array

// function include(arr, item){
//     if(arr.includes(item)){
//         return true
//     }else{
//         return false
//     }
// }

//refactor

const include = (arr, item) => arr.includes(item) ? true : false

console.log(include([1,2,3,4,5], 3), true)
console.log(include([5,4,3,2,1], 1), true)
console.log(include([1,3,2,5,4], 0), false)