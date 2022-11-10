// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
  while(string && string.slice(-1) == '!'){
    string = string.slice(0, -1)
  }
  return string
}



console.log(remove('Hi!'), 'Hi')
console.log(remove('Hi!!!'), 'Hi')
console.log(remove('!Hi'), '!Hi')
console.log(remove('!Hi!'), '!Hi')
console.log(remove('Hi! Hi!'), 'Hi! Hi')
console.log(remove('Hi'), 'Hi')