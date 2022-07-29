// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes 
// into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new 
// array/tuple of two integers, where the first one is the total weight of team 1, 
// and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is 
// the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is 
// the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is 
// the total weight of team 2.

//parameter - array
//return - array; the first value is the total weight of team1, the second is the 
// total weight of team 2

//create a function
//get the value of team 1 - loop thru array and output the even values and then sum
//get the value of team 1 - loop thru array and output the odd values and then sum
//loop thru array and return the odd and even values



function rowWeights(array){
    // let newArr = []
  let team1 =  array.filter((item, index) => index % 2 === 0 ).reduce((a,b) => a + b, 0)
  let team2 =  array.filter((item, index) => index % 2 !== 0 ).reduce((a,b) => a + b, 0)
    return [team1, team2]

}

function rowWeights(array){
  var team1 = 0;
  var team2 = 0;
  array.forEach(function(element,index) {
    if(index % 2 == 0){
      team1 += element;
    }else{
      team2 += element;
    }
  });
  return [team1, team2];
}

console.log(rowWeights([50,60,70,80]))
console.log(rowWeights([80]))
console.log(rowWeights([100,50]))
console.log(rowWeights([13,27,49]))
console.log(rowWeights([70,58,75,34,91]))
console.log(rowWeights([29,83,67,53,19,28,96]))
console.log(rowWeights([0]))