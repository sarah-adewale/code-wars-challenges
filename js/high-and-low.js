/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// function highAndLow(str){
// str = str.split(' ')
// return `${Math.max(...str)} ${Math.min(...str)}`
// // return 


// }

// console.log(highAndLow("1 2 3 4 5"))

// const isUnique = (arr) => {
//     let result = true

//     for(let i = 0; i < arr.length; i++){
//         console.log(`~~~~~Outer loop ~~~~ i === ${i}`)
//     }

//      for(let j = 0; j < arr.length; j++){
//         console.log(`~~~~~inner loop ~~~~ j === ${i}`)
//         if(i !== j && arr[i] === arr[j]){
//             result = false
//         }
//     }
    
// }

const isUnique = (arr) => {
    const breadcrumbs = {}
    let result = true

    for(let i = 0; i < arr.length; i++){
        console.log(`~~~~~~ LOOP I === ${i}`)
        if(breadcrumbs[arr[i]]){
            result = false
        }else{
            breadcrumbs[arr[i]] = true
        }
    }
    return result
}

isUnique()

