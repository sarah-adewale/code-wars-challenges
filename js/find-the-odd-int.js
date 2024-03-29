// iven an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  //happy coding!
  let count = 0 
  let last;
  A.sort((a,b) => a - b)
  for(let i = 0; i < A.length; i++){
    if(A[i] === last){
        count++
        continue;
    }if(count % 2){
        return last
    }
    last = A[i];
    count = 1
  }
  return last
}

console.log(findOdd([1,1,2]))
console.log(findOdd([7]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

// const arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
// const findOdd = arr => {
//    let count = 0;
//    let last;
//    arr.sort((a, b) => a - b);
//    for (let i = 0; i < arr.length; i++){
//       if (arr[i] === last) {
//          count++;
//          continue;
//       };
//       if(count % 2){
//          return last;
//       };
//       last = arr[i];
//       count = 1;
//    };
//    return last;
// };
// console.log(findOdd(arr));