// Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(x) {
//   // your code here; false
  
//   return  x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false
 
// }

function checkDuplicate(input){
  splitInput = input.split('')
  newSplit = splitInput.filter(item => item -1)
  return newSplit
}

console.log(checkDuplicate('sarah'))