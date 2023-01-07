// Write a function that takes an array of numbers (integers for the tests) and a target number. It 
// should find two different items in the array that, when added together, give the target value. The 
// indices of these items should then be returned in a tuple / list (depending on your language) like 
// so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be 
// accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the 
// items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  const pairs = []
  const num = {}
  for(const num1 of numbers){
    const num2 = target - num1
    if(num[num2] ){
        pairs.push([numbers.indexOf(num2), numbers.indexOf(num1)])
    }else{
        num[num1] = 1
    }
  }
  return pairs

//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     let diff = target - num;
//     if (numbers.slice(i + 1).includes(diff)) {
//       return [i, numbers.slice(i + 1).indexOf(diff) + i + 1];
//     }
//   }
//   return null;
}

console.log(twoSum([1234,5678,9012], 14690))
console.log(twoSum([1,2,3], 4))