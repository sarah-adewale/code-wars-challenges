// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

//number, no string, no special character, no boolean
//number
console.log(add(3, 4), 7)
console.log(multiply(3, 4), 12)
console.log(divide(15, 3), 5)
console.log(modulus(3, 4), 1)
console.log(exponent(3, 4), 81)
console.log(subt(3, 4), -1)

//create multiple functions, use math opearations to solve for each

function add(a,b){
    return a + b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function modulus(a,b){
    return a % b
}

function exponent(a,b){
    return Math.pow(a,b)
}

function subt(a,b){
    return a - b
}