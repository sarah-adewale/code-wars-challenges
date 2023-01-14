/*
write a panic function. The function should take in a sentence in all caps
with an exclamation point(!) at the end of the string. Use javascript built-in
string methods.
It the string is a phrase or sentence, add a emoji in btw each word

example input: "Hello"
example output: "HELLO"

Example input: "i'm almost out of coffee"
example output: "I'M ALMOST OUT OF COFFEE"
*/

/*
string
string in all caps (.toUpperCase())

split(' ') string to array with space
join(' 😱')
concatenate with !
// create a loop that iterates thru the array, if the length of the 
array > 1 then return str.toUpperCase()😱, the join using the join(' ')
*/

function panicFunction(str){
let newStr = str.split(' ').join(' 😱').toUpperCase() 
return `${newStr}!`
}

console.log(panicFunction('Hello'))
console.log(panicFunction("i'm almost out of coffee"))