// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// string and string, number and number, string and number, special characters
//number: output 1 if the characters are the same case, output 0 if the characters are a different case, output -1 if either of the 
//character is not a number or a string
//console.log(specialXters('a', 'g'), 1))
//console.log(specialXters('A', 'G'), 1))
//console.log(specialXters('a', 'G'), 0))
//console.log(specialXters('0', '?'), -1))

//create a function called specialXters
function specialXters(a,b){
    let char = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
    if(a.toLowerCase() === b.toLowerCase() && a.toUpperCase() === b.toUpperCase()){
        return 1
    }else if(!a.includes(char) && !b.includes(char) ){
        return -1
    }else{
        return 0
    }

}

console.log(specialXters('a', 'g'), 1)
console.log(specialXters('A', 'G'), 1)
console.log(specialXters('a', 'G'), 0)
console.log(specialXters('0', '?'), -1)
//create a conditional to check if both cahracters are the same or different
//return the output
