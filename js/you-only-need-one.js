// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//   // your code here
//   return a.includes(x)
// }


const reverseSeq = n => {
  let arr = []; //create an empty array
//create a loop
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
      return arr
};

console.log(reverseSeq(5))