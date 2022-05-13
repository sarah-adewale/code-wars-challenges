/*
Return the number (count) of vowels in the given string.
p: 
We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
// pseudo code

function getCount(str) {
    // create a function
  let vowelsCount = 0;
  // start the vowels count at 0
  let arr = str.toLowerCase().split('')
    // coerce in into lowercase, split into individual letters
   arr.forEach(item => {
    //    create a loop and add a conditional to the loop. The conditional translates to if each item is strictly equal to 
    // a vowel, add 1 to the vowel count
      if(item  === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u'){
        return vowelsCount++
      }
  });
//   return/output the count
  return vowelsCount
}

console.log(getCount('parrots are fantastic'), 7)
console.log(getCount('lovely sunshine'), 3)
console.log(getCount(99), 0)
console.log(getCount(''), 0)

// or

function getCount(str){
  let count = 0
  let arr = ['a', 'e', 'i', 'o', 'u']
  let newArr = str.toLowerCase().split('')
  for(const charArr of newArr){
    if(arr.includes(charArr)){
       count++
    }
  
  }
  return count
}

console.log(getCount('parrots are fantastic'), 7)
console.log(getCount('lovely sunshine'), 3)
console.log(getCount(99), 0)
console.log(getCount(''), 0)
