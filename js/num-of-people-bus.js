// There is a bus moving in the city, and it takes and drop some 
// people in each bus stop.

// You are provided with a list (or array) of integer pairs. 
// Elements of each pair represent number of people get into bus (The first item) 
// and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last 
// bus station (after the last array). Even though it is the last bus stop, 
//the bus is not empty and some people are still in the bus, 
//and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of 
// people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in 
// the first bus stop.

var number = function(busStops){
  // Good Luck!
  let totalPeople = 0
  for(let i = 0; i < busStops.length; i++){
    totalPeople += busStops[i][0]
    totalPeople -= busStops[i][1]
  }
  return totalPeople; 
}

// refactor with comments

// p: list?, array? number ? the first item is the number of people entering the bus
// the second is the number of people that gets off the bus 
// r: return the number of people still in the bus
// e: number([[3, 0], [4, 5], [3, 2]]), 3) 
    //number([[5, 0], [2, 7], [3, 12]])
    //number([[8, 0], [4, 5], [3, 2]])
// p the number of people still in the bus is the sum of all the arrays at index 0 arr[0] 
// minus the sum of all the arrays at index 1 arr[1]

// create a function and assign it a parameter
function number(busStops){
    //create a variable to hold the result
    let totalPeople = 0
// create a loop for the sum of the arrays 
for(let i = 0; i < busStops.length; i++){
    // add the sum at index 0 to the value of totalPeople
    totalPeople += busStops[i][0]
     // then substract the sum at index 1 from the value of totalPeople
    totalPeople -= busStops[i][1]
}
}

number([[3, 0], [4, 5], [3, 2]], 3)
number([[5, 0], [2, 7], [3, 1]], 2)
number([[8, 0], [4, 5], [3, 2]], 8)