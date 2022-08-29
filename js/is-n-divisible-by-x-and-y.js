// Create a function that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//pseudo
//create a function with 3 parameters n, x, y
//check if the n is divisible by both x and y - 
//use a conditional and the modulus % to check if a value is divisible by another value
//return a boolean; true if it is divisible and false if not. chain using &&
//to note: all numbers are positive

function isDivisible(n, x, y) {
if(n % x === 0 && n % y === 0){
    return true
}else{
    return false
}
}

console.log(isDivisible(3,1,3)) // true
console.log(isDivisible(12,2,6)) // true
console.log(isDivisible(100,5,3)) // false
console.log(isDivisible(12,7,5)) // false