// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  // good luck
  //p: create a function
  //use the typeOf operator to check value type
  return typeof(a + b)
  // add the values
  //return the result
}

//p: any primitive value
//r: the type of the sum of the arguments
//examples:
console.log(typeOfSum(12, 1))
console.log(typeOfSum('d', 1))
console.log(typeOfSum(1, 'a'))
console.log(typeOfSum('dd', ''))
console.log(typeOfSum(true, 1))
console.log(typeOfSum('s', false))
console.log(typeOfSum(null, 1))
console.log(typeOfSum('s', null))
console.log(typeOfSum(null, undefined))
console.log(typeOfSum(undefined, 're'))
console.log(typeOfSum(undefined, true))
console.log(typeOfSum(null, false))
console.log(typeOfSum(null, 1))

