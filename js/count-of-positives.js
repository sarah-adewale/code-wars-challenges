// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second 
// element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



//p: array
//r: return an array where the first number is the count of the positive numbers and the second 
// number is the sum negative numbers
//e:
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) //[10, -65]
//p: count all positive number, sum all negative number. 0 is neither positive or negative.
// if input is empty or null, return []

//create a function

function countPositivesSumNegatives(input) {
    if(input.length == null || input.length == [ ]){
            return []
        }
    let newArray = []
    let sum = 0
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            newArray.push(input[i])
        }else{
            sum += input[i]
        }
        
    }

        return [newArray.length, sum]
    
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65])

