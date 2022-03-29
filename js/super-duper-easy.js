// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

function problem(x){
  return  x === String(x) ? 'Error' : x * 50 + 6 
}

function problem(x){
  return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}

function problem(x){
if(isNaN(x) | x === ""){
 return "Error";
} else {
 return(x * 50)+6
 }
}



console.log(problem(1))
console.log(problem('hello'))
console.log(problem(7))
console.log(problem('7'))