// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array 
// with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 
// For more information, please consult:

// using the flat() method
function flattenAndSort(array) {
    sortedArray = array.flat().sort((a, z) => a - z)
    
  // Good luck, brave code warrior!
  return sortedArray;
}



// using concat() method
function flattenAndSort(array){
    sortedArray = [].concat(...array).sort((a, z) => a - z)
    return sortedArray
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

//using reduce() method
function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b);
}