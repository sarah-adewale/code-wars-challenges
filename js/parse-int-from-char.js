// You ask a small girl,"How old are you?" She always says, "x years old", where x 
// is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test 
// input may be "1 year old" or "5 years old". The first character in the string 
// is always a number.

function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
inputString = inputString.split(' ').slice()[0]
return parseInt(inputString)
}

//OR

function getAge(inputString){
  return parseInt(inputString[0]); 
}

console.log(getAge('4 years old'))
console.log(getAge('1 year old'))
console.log(getAge('5 years old'))
