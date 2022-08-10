// Complete the function which converts hex number (given as a string) to a decimal 
// number.

//parameter - hexstring
//return - number
//cnvert hexadecimal string to decimal using parseInt(hexString, radix). the radix is 16


function hexToDec(hexString){
  return parseInt(hexString, 16)
}

//examples

console.log(hexToDec('1')) //1
console.log(hexToDec('a')) //10
console.log(hexToDec('10')) //16
console.log(hexToDec('FF')) //255
console.log(hexToDec('-C')) //-12

