/*
transform this simple sorting algorithm into a unique sort. it should not return any duplicate values in the sorted array

input: [1,5,2,1] => ouput: [1,2,5]
input: [4,2,2,3,2,2,2] => output: [2,3,4]
*/

const uniqueSort = (arr) => {
    const breadcrumbs = {} //cache; keeps track of all the values that we've seen
    const result = []

    for(let i = 0; i < arr.length; i++){
        if(!breadcrumbs[arr[i]]){ //if the individual element in the array is not in the breadcrumbs object
            result.push(arr[i]) //push it to the result arr
            breadcrumbs[arr[i]] = true //save the value into the object
        }
    }

    return result.sort((a,b) => a - b)
}

console.log(uniqueSort([4,2,2,3,2,2,2]))