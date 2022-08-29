// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//p - a sequence of numbers represented as strings
//r - the same sequence of of numbers with the first and last cut out. if params is
//empty or removing the first and last makes it empty, return NULL
//use .shift to remove the first value, and .pop to remove the second value

function array(arr){

//     arr = arr.split(',')
//   arr.pop()
//   arr.shift()
//   return arr.join(' ') === '' ? null : arr.join(' ')
arr = arr.split(',')
return arr.slice(1, -1).join(' ') || null

}


console.log(array('1,2,3')) //'2'
console.log(array('1,2,3,4')) //'2 3'
console.log(array('1,2,3,4,5')) //'2 3 4'
console.log(array('')) //NULL
console.log(array('1,2')) //NULL
console.log(array('1')) //NULL

