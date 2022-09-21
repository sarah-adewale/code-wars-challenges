// Given an array add all the number elements and return the binary equivalent of 
// that sum; to make the code bullet proof anything else than a number should be 
// addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float 
// or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it

//pseudo
//you are given an array of elements either numbers or strings, 
//add only the numbers in the array
//return the result in binary

//todo - create a function with a parameter
//filter out the numbers in the array - 
//use the filter method to remove numbers in the array
//sum all the filtered number - 
//use reduce to sum values in the array
//convert to binary using toString(2)
//return the result



function arr2bin(arr){
 
    // let num =  arr.filter((item) => parseInt(item)).reduce((acc, c) => acc + c, 0)
    // return num.toString(2) 
    return arr.reduce((acc, c)=>acc+(typeof c=="number"?c:0),0).toString(2);
  
  // show me the code
  // toString(b)
}

console.log(arr2bin([1,2,'a'])) //"11"
console.log(arr2bin([1,2])) //"11"
console.log(arr2bin([])) //"0"
console.log(arr2bin([NaN])) //"NaN"

