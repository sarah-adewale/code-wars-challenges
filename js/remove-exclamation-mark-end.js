// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

function remove (string) {
  //coding and coding....
//   return string.slice(0, -1);
    if(string[string.length - 1] === '!'){
        return string.slice(0, -1);
    }else{
        return string
    }
}

//or

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

console.log(remove('Hi!'))
console.log(remove('Hi!!!'))
console.log(remove('!Hi'))
console.log(remove('!Hi!'))
console.log(remove('Hi! Hi!'))
console.log(remove('Hi'))


