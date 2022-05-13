// Now you have to write a function that takes an argument and returns the square of it.
// p: number? floats?
// r: return the square of the argument
// e: square(3) --> 9
//  square(4) --> 16
// square(8) --> 64
// p: write a function, return the square of it...using the Math.sqrt()? Math.pow(arg, 2)

function square(args){
    args = Math.pow(args, 2)
    return args
}

console.log(square(3))
console.log(square(4))
console.log(square(8))