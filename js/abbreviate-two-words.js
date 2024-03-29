// Write a function to convert a name into initials. This kata strictly takes two 
// words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    // let split = name.split('.')
    // let initials = split.shift().charAt(0) + split.pop().charAt(0)
    let initials = name.split(" ").map((n)=>n[0]).join(".").toUpperCase()
    return initials

    
}

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('patrick feeney'))