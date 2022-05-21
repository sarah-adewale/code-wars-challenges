// Given an array of integers as strings and numbers, return the sum of the array values as 
// if all were numbers.

// Return your answer as a number.

function sumMix(x){

 let newArray = x.toString().split(' ').parseInt(join(), 2)
 let anotherArr = newArray.reduce((acc, c) => acc + c, 0)
 return anotherArr
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))