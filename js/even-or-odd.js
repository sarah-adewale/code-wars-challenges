// Create a function that takes an integer as an argument and returns "Even" for even 
//numbers or "Odd" for odd numbers.

function even_or_odd(number) {
// for(let i = 0; i < number; i++){
//   if(number[i] % 2 === 0){
//     return 'Even'
//   }else{
//     return 'Odd'
//   }
// }  
return number % 2 === 0 ? 'Even' : 'Odd'
}

console.log(even_or_odd(2))
