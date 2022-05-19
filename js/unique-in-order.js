// Implement the function unique_in_order which takes as argument a sequence and returns a 
// list of items without any elements with the same value next to each other and 
// preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    newArray = []
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i + 1]){
             newArray.push(iterable[i])
        }
    }
    return newArray
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,1,2,2,2,3,4]))

// var uniqueInOrder=function(iterable){
//     // splittedArray = 
//     if(iterable === [ ]){
//     //     return iterable.split('').filter(function(item, index, arr) {
//     //     return !index || item != arr[index - 1]
//     // })
//     console.log('works')
//     }else{
//     //     return iterable.filter(function(item, index, arr) {
//     //     return !index || item != arr[index - 1]
        
//     // })
//     console.log('it dont works')
//     }
    
// }

// uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder([1,1,2,2,2,3,4])
