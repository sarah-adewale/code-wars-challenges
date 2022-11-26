// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the 
// first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
  //Solution
  let newString = ''
  for(let i = 0; i < one.length; i++){
    newString += one.charAt(i) + two.charAt(i) + three.charAt(i)
  }
  return newString
 }

 console.log(tripleTrouble('aa', 'bb', 'cc'), "abcabc")

