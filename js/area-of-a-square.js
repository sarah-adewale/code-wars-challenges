
// calculate the area of a circle and round off ouput to two decimals

function areaOfSquare(A){ //create a function with A as a parameter
  return +Math.pow((2 * A / Math.PI), 2).toFixed(2) // return the evaluation
}
console.log (areaOfSquare(50)) //console log the function call with the argument value