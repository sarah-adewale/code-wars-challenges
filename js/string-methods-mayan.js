//+ charAt
//* what it does: Takes in an index and a string and returns the specific character
//* at that location

//* How it works: sees if the soecified index passed into the method matches any index
// *available within the string, then returns the character at that index if available

// * Time complexity

// *examples: 
let text1 = 'Sample Text'
console.log(text1.charAt(0))
console.log(text1.charAt(text1.length -1))
console.log(text1.charAt('0'))
console.log(text1.charAt('test')) //returns S
let test1 = ''
console.log(text1.charAt(''))

// ! error


// ?--------------------------------------------------------------------------------
//+ charCodeAt() returns the code of the character at that index
//* what it does: Takes in an index value and a string and returns an integer for the UTF-16
// * value location at that index
//* How it works: sees if a specified index passed into the method matches any index available
// * within the string, then returns the UTF-16 INTEGER VALUE AT THAT INDEX, if available. if the 
// *integer value is less that 655536, then charCodeAt(i+1) should be used to get the other half
// * of the value pair. 
// * Time complexity
// *examples: 
