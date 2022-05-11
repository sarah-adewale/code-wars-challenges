  
// function correct(string)
// {
//   string = string.split('')
//   let arr = []
// for(let i = 0; i < string.length; i++) =>{
//   if(string[i] === 5){
//     arr.push('s')
//   }else if(string[i] === 0){
//     arr.push('0')
//   }else if(string[i] === 1){
//     arr.push('i')
//   }else{
//     arr.push(string[i])
//   }

// }
// return string.join('')
// }
//   console.log(correct('5arah'))
  
// function correct(string)
// {
// splittedArray = string.split('')
//   splittedArray.map(a => a === 5 ? 'S' OR a === 0 ? 'O' OR a === 1 ? I : 'nothing to see here' ).join('')

  
// console.log(correct('5arah'))

function getVowels(string){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  string.filter(item => !vowels.includes(item.toLowerCase()))
  return vowels
}
  console.log(getVowels('hello'))



// function isDivideBy(number, a, b) {
//   // good luck
//   if(number % a === 0 && number % b === 0){
//     return 
//   }
// }

// function filterArray(arr){
//   arr.forEach(item => console.log(item > 5) )
 
// }

// filterArray([7, 3, 8, 2, 4, 0])

// function isString(string)
// let newString = string.split('').map(a => a === 5 ? 'S' : )

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


// const movies = ['jumanji', 'auto', 'mobile']
// for(const movie of movies){
//   console.log(movie)
// }

// const person = {
//   firstName: 'sarah',
//   lastName: 'adewale',
//   age: 28,
//   hobbies: ['reading','codewars', 'music'],
//   address: {
//   city: 'lagos',
//   state: 'oyo state',
//   street: '4, olatunji street. ilaje, bariga'
// }
// }

// console.log(person.address.street)


// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// function digitize(n) {
//   n = n.toString()
//  let reversedArray = n.split('').map(Number).reverse() //code here
//  return reversedArray
// }
// digitize(1234)

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   avgPoint = classPoints.reduce((a,b) => a + b, 0) /classPoints.length
//   return avgPoint < yourPoints ? true : false
  
// }
// console.log(betterThanAverage(20, 10))


/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/
// let user = {
//   name: 'john',
// 	surname: 'smith'
// }

// user.name = 'pete'
// delete user.name
// console.log(user.name)

// // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let isEmpty = {}
// console.log(isEmpty.noSuchProperty === undefined)

// let isObj = {}
// console.log('noSuchProperty' in isObj)

// //or

// function newIsEmpty(obj){
//   for(let key in obj){ //note: for and in do not use else
//     return false
//   }
//   return true
// }
// console.log(newIsEmpty())

/*
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

// let salaries = {
//   john: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = salaries.john + salaries.Ann + salaries.Pete
// console.log(sum)

// //OR
// let newSalaries = {
//   john: 100,
//   Ann: 160,
//   Pete: 130
// }
// let newSum = 0
// for(let key in newSalaries){
//   newSum+= newSalaries[key]
// }
// console.log(newSum)
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
/*
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

// function multiplyNumeric(obj){
//   let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }
  
//   for(let key in obj){
//     if(typeof obj[key] === 'number'){
//       obj[key] *=2
//     }
//   }
// }
// multiplyNumeric()

/*
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// let arr = [1, 2, 3, 4]
// sumArray = arr ? arr.sort((a,b) => a - b).slice(1, -1).reduce((a,b)=> a + b, 0) : 0
// console.log(sumArray)

// let obj = {
//   name: 'sarah',
//   surname: 'adewale',
//   age: 28,
// }
// for(let data in obj)
//   console.log(obj[data]) //add object plus variable to output values. add only variables to ouput properties

// let codes = {
//   '+40': 'Abuja',
//   '+51': 'Lagos',
//   '+3': 'Ibadan',
//   '+45': 'Osun'
// }
// for(let code in codes)
//   console.log(+code)


// function rps(player1, player2){
  
//   if(player1 === 'scissors' && player2 === 'paper'){
//     return 'Player 1 won!'
//   }else if(player1 === 'paper' && player2 === 'rock'){
//     return 'Player 1 won'
//   }else if(player1 === 'rock' && player2 === 'scissors'){
//     return 'Player 1 won'
//   }else if(player1 === player2){
//     return 'Draw'
//   }else{
//     return 'Player 2 won!'
//   }
// }



// console.log(rps('scissors','paper')) // Player 1 won!
// console.log(rps('scissors','rock')) // Player 2 won!
// console.log(rps('paper','paper')) // Draw!


// function stringOfDigits(string){
// 	let splittedArray = string.split('')
//  		return splittedArray.map(item => item < 5 ? 0 : 1 ).join('')
  
// }

// function fakeBin(x){
//       return x.map(a => a < 5 ? '0' : '1').join()
//   }

// console.log(fakeBin([1,2,3,5,6,7]))

// function randomNonNegative(num){
//   num = num.toString()
//   reversedArr = num.split('').map(Number).reverse()
//   return reversedArr
// }
// randomNonNegative(12345)


// p: string? number?
// r: return true if you're better or else if class is better
// e: 

// // p: create a function 
// function classTest(yourPoints, classPoints){
//   // 		calculate the average
//   avgPoints = classPoints.map(a => a / a.length)
//   return avgPoints < yourPoints ? true : false
// }

// console.log(classTest(yourPoints, classPoints)) //true
// console.log(classTest(yourPoints)) //true
// console.log(classTest(classPoints)) //false

// //		compare yourPoints with classPoints
// //		output the return value


// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   averagePoint = classPoints.reduce((a, b) => a + b, 0) / 2
// //loop thru classPoints using .map method
// //   to create the average point
//   return averagePoint > yourPoints  ? false : true
// //then return false if average point is
// //   greater than yourPoints else return true
// }


// betterThanAverage()


// p: string? array? number?
// r: 

// const todos = [
//   {
//     id: 1,
//     text: 'take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'dentist appointment',
//     isCompleted: false
//   },
// ];

// let todoIsCompleted = todos.map(listTodo => listTodo.id)
//   console.log(todoIsCompleted)



// let user = {
//   name: 'sarah',
//   age: 28,
// }

// console.log ('rain' in user) //the in operator returns a boolean

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//   let mult = 1
//   x.reduce((a,b) => a * b, mult)
  
// }
// console.log(grow([1,2,3,4]))

// function rps(){
//   randomFunc = Math.floor(Math.random()* 3)
//   if(randomFunc){
//     return 'rock'
//   }else if(randomFunc){
//     return 'paper'
//   }else{
//     return 'scissors'
//   }
// }

// console.log(rps())

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

// const quarterOf = (month) => {
//   // Your code here
//  return Math.ceil(month / 3)
  
// }

// // p: number?
// // r: return quarter of the year as an integer
// // e:

//  		console.log( quarterOf(3) ) //, 1) )
//     console.log( quarterOf(8) )//, 3)
//     console.log( quarterOf(11) )//, 4)

// p: if (month < 6) output 1, else if (month > 6 && month < 8) output 3, else if (month > 8 && month < 11) output 4

function sameCase(a, b){
  // return 0;
  // let a = a.split('')
  if(a.toUpperCase() === b.toUpperCase()){
    return 1
  }else if(a.toLowerCase() === b.toLowerCase()){
    return -1
  }else{
    return 0
  }
}

console.log(sameCase(0, 9))



























