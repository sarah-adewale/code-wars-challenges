// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 
//4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    // splittedArray = numbers.toString().split(' ')
    // newArray = splittedArray.filter(item => item > 2)
    // return newArray.join()
    min = numbers.sort((a,b) => a - b)
    return min[0] + min[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))