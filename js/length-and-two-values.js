// Given an integer n and two other values, build an array of size n filled with 
//these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


function alternate(n, firstValue, secondValue){
    let array = new Array()
    for(let i=0; i<n;i++){ 
          if(i%2 == 0){
           array.push(firstValue);
          }else{
           array.push(secondValue);
          }
    }
    return array; 
//  return [...Array(n + 1)].join(firstValue + secondValue)
// let arr = [].concat(firstValue, secondValue)
// return new Array(n).fill(arr).flat()
// let newArr = ''
// for(let i = 0; i < n; i++){
//     newArr+= arr
// }
// return newArr
// return [...Array(n + 1)].join(arr) 
}



// function repeatStr (n, s) {
// return s.repeat(n);
// }

console.log(alternate(5, true, false))
console.log(alternate(10, 'blue', 'red'))
console.log(alternate(0, 'one', 'two'))