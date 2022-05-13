
const users = [
 	john = {
    name: 'john',
    age:25
  },
  pete = {
    name: '',
    age: 30
  },
  mary = {
    name: 'mary',
    age: 30
  }
  
]
let arr = [john, pete, mary]

// console.log(users.length)
let userAge = []
for(let i = 0; i < users.length; i++){
  userAge.push(users[i].age)
}

let averageUser = userAge.reduce((acc, c) => acc + c, 0)/userAge.length
// .reduce only works with array of numbers
console.log(averageUser)



// function getSum( a,b )
// {
//     let max = Math.max(a, b)
//     let min = Math.min(a, b)
//     let sum = ((max-min)+1) * (min + max) / 2 
    
//     if(a === b){
//         return a || b
//     }else{
//         return sum
//     }

// }

// console.log(getSum(2, 4))

function noSpace(x){
  x = x.split(' ')
  return x.join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))