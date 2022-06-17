// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//p: an array of 3 numbers
//r: the index of the number that fits between the 3 numbers
//p: i have an array of 3 numbers, i go through the array and output the number between(an even number?)



function gimme(triplet){
    // for(let i = 0; i < triplet.length; i++){
    //     if(triplet[i] % 2 === 0){
    //        return triplet.indexOf(triplet[i])
    //     }
       
    // }
     // Clone the input array.
  let clonedArray = triplet.slice(0);
  // Sort it in ascending order.
  clonedArray.sort((a, z)=> (a-z))
 
  return triplet.indexOf(clonedArray[1]);
    
    
}

console.log(gimme([2, 3, 1]))
console.log(gimme([5, 10, 14]))
console.log(gimme([-2, -3, -1]))
console.log(gimme([-5, -10, -14]))
console.log(gimme([-2, -3.2, 1]))
console.log(gimme([-5.2, -10.6, 14]))
