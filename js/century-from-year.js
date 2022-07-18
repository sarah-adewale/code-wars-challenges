// The first century spans from the year 1 up to and including the year 100, the 
// second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


// function century(year) {
//   // Finish this :)
//   let century = 100
//   return Math.ceil(year/century)
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))

function firstNonConsecutive(arr) {
for (let i = 0; i < arr.length - 1; ++i) {
if (arr[i] + 1 !== arr[i + 1]) {
return arr[i + 1]
}
}
return null
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))