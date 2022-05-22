// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

function sumOfDifferences(arr) {
    let sortedArr = arr.sort((a,z) => z - a)
    let sum = 0
    for(let i = 0; i < sortedArr.length - 1; i++){
        sum += arr[i] - arr[i + 1]
    }
    return sum
}

console.log(sumOfDifferences([-3, -2, -1]))
console.log(sumOfDifferences([1, 2, 10]))