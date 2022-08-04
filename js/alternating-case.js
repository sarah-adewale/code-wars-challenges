// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes 
// uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are 
// unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

function toAlternatingCase(str){

    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
        newStr += str[i].toUpperCase()
        }else if(str[i] === str[i].toUpperCase()){
        newStr += str[i].toLowerCase()
        }else{
        newStr += str[i]
        }
    }
    return newStr
}

//or

String.prototype.toAlternatingCase = function () {
  let str = ''
  for(let i = 0; i < this.length; i++){
    if(this[i] === this[i].toLowerCase()){
      str += this[i].toUpperCase()
    }else if(this[i] === this[i].toUpperCase()){
      str += this[i].toLowerCase()
    }else{
      str += this[i]
    }
  }
  return str
}

console.log(toAlternatingCase('hello world')) // 'HELLO WORLD'
console.log(toAlternatingCase('HELLO WORLD')) // 'hello world'
console.log(toAlternatingCase('HeLLo WoRLD')) // 'hEllO wOrld'
console.log(toAlternatingCase('12345')) // '12345'
console.log(toAlternatingCase('1a2b3c4d5e')) // '1A2B3C4D5E'

