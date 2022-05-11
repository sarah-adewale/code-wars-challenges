// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
   //enter code here
//    get the sum of the array
  sum = array.reduce((acc, c) => acc + c, 0)
//   create a conditional to handle the modular condition and the null
  if(sum % 2 === 0){
    return 'even'
  }else if(sum === null){
    return 'even'
  }else{
    return 'odd'
  }
}


oddOrEven([0, -1, -5])
oddOrEven([0, 1, 4])