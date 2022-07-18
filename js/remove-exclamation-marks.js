// Write function RemoveExclamationMarks which removes all exclamation marks from a given 
// string.

function removeExclamationMarks(s) {
   return s.split('').filter((item) => item !== '!').join('')
}

function removeExclamationMarks(s) {
  return s.split('!').join(''); //split(!) removes exclamation mark
}

console.log(removeExclamationMarks('hello world!'))