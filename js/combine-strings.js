// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

// Create the combineNames function here
// function combineNames(firstname, lastname){
//   return `${firstname} ${lastname}`
// }

// function minSum(arr) {
//     arr = arr.sort((a, b) => a - b); // sort the array in ascending order
//     let result = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         result += arr[i] * arr[i + 1];
//     }
//     return result;
// }

// function removeDuplicates(arr){
// let newArr = arr.filter((item, index, arr) => !index || item != arr[index + 1])
// return newArr

// }

function FirstReverse(str) { 

  // code goes here  
  let newStr = str.split('').reverse().join()
  return newStr; 

}





console.log(FirstReverse('coderbyte'))

