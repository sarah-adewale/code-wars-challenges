// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    let alpha = str.replace(/[^A-Za-z]+/g, '') //remove numbers and special characters
    let split = alpha.split('')
    return split.reverse().join('')
    // return alpha
}

console.log(reverseLetter("ultr53o?n"))
console.log(reverseLetter("A!@#b$%^c&*(2"))
console.log(reverseLetter("ab23c"))
console.log(reverseLetter("krishan"))