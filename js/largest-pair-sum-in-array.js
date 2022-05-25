// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers){
  sortNum = numbers.sort((a,z) => z - a)
  sum = sortNum[0] + sortNum[1]
  return sum
}

console.log(largestPairSum([10,14,2,23,19]))
console.log(largestPairSum([-100,-29,-24,-19,19]))

