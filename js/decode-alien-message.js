/*
we come in peace!
we've received what (we assume) is a message of peace and brotherhood from an alien planet. they almost got it right, but the messages
are backward. write a function to reverse the backward messages so we can read what they have to say

*/

const title = ':htraE no od ffutS'
const messages = [
    'maerc eci yrT',
    'rewoT leffiE tisiV',
    'noom eht ot snamuh etacoleR',
    'egrahc ni sta tuP'
]

/*
step 1: reverse a string
write a function that takes in a string and returns the reverse of that string. An interviewer may want to check if you know your string 
methods or may want to know if you can reverse a string manually. practice both ways!

example input: !htrae ot emoclew
example output: Welcome to earth
*/

function reverseString(str){
    //return arr.split('').reverse().join(')
    // return arr.split('').reduce((acc, c) => c + acc)
    let reversedString = ''
    //decrement loop
    for(let i = str.length - 1; i >= 0; i--){ 
        reversedString += str[i]
    }
    return reversedString
    
}

/*
step 2: now we'll revers all strings in an array. Write a function that takes in an array of strings and returns a new array with all
strings reversed. 

you can reuse your reverseString() function, use string methods, or reverse the string manually
*/

function reverseStringInArray(arr){
    return arr.map((item) => reverseString(item));
}

console.log(reverseString(title))
console.log(reverseStringInArray(messages)) 