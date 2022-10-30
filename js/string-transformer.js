// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to 
// lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//string
//string
// function stringTransformer(str){
//     str = str.split(' ')
//     let reversedString = str.reverse().join(' ')
//     let newStr = reversedString.split('').map(item => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('')
//     return newStr
// }

//refractor
const stringTransformer = str => str.split(' ').reverse().join(' ').split('').map(item => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('')

console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE')
console.log(stringTransformer('SaraH ADewale'), 'adEWALE sARAh')