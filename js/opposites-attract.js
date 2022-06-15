// Timmy & Sarah think they are in love, but around where they live, they will 
//only know once they pick a flower each. If one of the flowers has an even number 
//of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return 
//true if they are in love and false if they aren't.

//parameter is a number
//return true or false
//write a function that has two parameters(flower1 and flower2) if flower1 is an even 
//number and flower 2 is an odd number, return true else false


function lovefunc(flower1, flower2){
   return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0 ? true : false
// if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
//     return true
// }else{
//     return false
// }
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1,4)) //true
console.log(lovefunc(2,2)) //false
console.log(lovefunc(0,1)) //true