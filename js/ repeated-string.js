// given a string, you have to return a string in which each character is repeated once

// p: a string
// r: a string repeater twice

// p: create a function that takes in a string
function stringRepeat(str){
  // split the string into an array
  // loop thru each array using .map to return a new array
// convert the array back into a string
  let repeatedString = str.split('').map(n => n + n).join('')
//   return the output
  return repeatedString
}
// e:
console.log(stringRepeat('string')) //'ssttrriinngg')
console.log(stringRepeat('hello World')) //'hheelllloo  WWoorrlldd')
console.log(stringRepeat('1234')) //'11223344')