// Define a function that removes duplicates from an array of numbers and returns it 
// as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return a.filter((item, index, arr) => arr.indexOf(item) === index)
}


function distinct(a) {
  return Array.from(new Set(a));
}


console.log(distinct([1,2])) // [1,2]
console.log(distinct([1,2,2])) // [1,2]
console.log(distinct([1])) // [1]
console.log(distinct([1,1,2])) // [1,2]
