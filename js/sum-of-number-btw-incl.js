/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum( a,b )
{
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let sum = ((max-min)+1) * (min + max) / 2 
    
    if(a === b){
        return a || b
    }else{
        return sum
    }

}

console.log(getSum(2, 4))

// refactored using tenery

function getSum(a,b){
    // to check for the sum of the values a and b between and including them
    // first create the minimum and maximum value 
    let min = a
    let max = b
    // sum using the formular 
    sum = ((max - min)+1) * (min + max) / 2
    // return the conditional
    return a === b ? a || b : sum
}

console.log(getSum(2, 4))