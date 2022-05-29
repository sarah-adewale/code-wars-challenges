// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let sum = ''
    for(let i = 0; i < n; i++){
         sum += s
    }
    return sum
  
}

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))

// or

function repeatStr (n, s) {
  return s.repeat(n);
}