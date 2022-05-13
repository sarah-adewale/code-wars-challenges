/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
p: array of numbers
r: multiplied solution
e: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
p: multiply the array of numbers
return the multiplied solution
*/

function multNumbers(numbs){
    return numbs.reduce((acc,c) => acc * c, 1)
}

multNumbers([1, 2, 3, 4])