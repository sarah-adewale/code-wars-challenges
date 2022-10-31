// The goal of this exercise is to convert a string to a new string where each 
// character in the new string is "(" if that character appears only once in the 
// original string, or ")" if that character appears more than once in the original
// string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//string
//return string replaced by ( of )
//
function duplicateEncoder(string){
    string = string.toLowerCase().split('')
    return string.map((item, i, arr) => arr.indexOf(item) === arr.lastIndexOf(item) ? '(' : ')').join('')
}

console.log(duplicateEncoder('din'), '(((')
console.log(duplicateEncoder('recede'), '()()()')
console.log(duplicateEncoder('Success'), ')())())')
console.log(duplicateEncoder('(( @'), '))((')

//how to check if an item in an array appears more than once
//string.map((item, i, arr) => arr.indexOf(item) === arr.lastIndexOf(item)