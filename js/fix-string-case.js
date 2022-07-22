// In this Kata, you will be given a string that may have mixed uppercase and 
// lowercase letters and your task is to convert that string to either lowercase 
// only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert 
// the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to 
// lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to 
// uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//parameter = string
//return = string
//pseudo; if the number of lowercase is greater than the number of uppercase, return 
// lowercase else if the number of uppercase characters is greater than lowercase, 
// return uppercase, else return lowercase.  

function solve(s){
  let lowerNum = 0;
  let upperNum = 0;
  
    for(let i = 0; i <= s.length-1; i += 1){
      
      if(s[i] === s[i].toLowerCase()) {
        lowerNum += 1;
      } else {
        upperNum += 1;
      }
   }
  
  return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve('coDe'))
console.log(solve('CODe'))
console.log(solve('coDE'))
