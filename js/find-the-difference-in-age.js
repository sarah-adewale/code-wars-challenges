// At the annual family gathering, the family likes to find the oldest living 
// family member’s age and the youngest family member’s age and calculate the 
// difference between them.

// You will be given an array of all the family members' ages, in any order. The 
// ages will be given in whole numbers, so a baby of 5 months, will have an 
// ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, 
// oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
//first create a function, extract the lowest and highest value of the array using math 
//method and the spread operator, get the difference between between the two values
//   let max = Math.max(...ages)
//   let min = Math.min(...ages)
//   let difference = max - min
//   return [min, max, difference]
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

console.log(ages([[82, 15, 6, 38, 35]]))

