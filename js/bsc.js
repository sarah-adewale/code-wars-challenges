// he cockroach is one of the fastest insects. Write a function which takes its speed in km per 
//hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. 
//The result should be an Integer.

function cockroachSpeed(s) {
  cm = 27.778
  s = cm * s
  return Math.floor(s)
}

console.log(cockroachSpeed(1.08)) // 30