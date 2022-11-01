// Given an array of integers , Find the Nth smallest element in this array of 
// integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

// 2 parameters obj, and a number
//number
//

console.log(nthSmallest([3,1,2], 2), 2) 
console.log(nthSmallest([15,20,7,10,4,3], 3), 7)
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5), 92)

function nthSmallest(arr, n){
   let sorted = arr.sort((a,b) => a - b)
   let sortedDelete = sorted.splice(0, n)
   return Math.max(...sortedDelete)
    // return sorted
}

//refractor

function nthSmallest(arr, pos){
  let sorted = arr.sort((a,b) => a-b);
  
  return sorted[pos-1];
}
