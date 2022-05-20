// Given a random non-negative number, you have to return the digits of this 
// number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  n = n.toString()
let reversedArray = n.split('').map(Number).reverse() //code here
return reversedArray
}
digitize(1234) // output [ 4, 3, 2, 1 ]