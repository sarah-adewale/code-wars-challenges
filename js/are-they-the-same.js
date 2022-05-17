function comp(array1, array2){
    sortArray1 = array1.sort((a,z) => a - z)
    sortArray2 = array2.sort((a,z) => a - z)
    let eachArr = 0
    let eachArr2 = 0
    // for(let i = 0; i <=array1; i++){
    //     let eachArr = array1[i]
    //     return eachArr
    // }
    // for(let i = 0; i <=array2; i++){
    //     let eachArr2 = array2[i]
    //     return eachArr2
    // }
    sortArray1.forEach(element => {
        let eachArr = element
        return eachArr
    });
        sortArray2.forEach(element => {
        let eachArr2 = element
        return eachArr2
    });

  return Math.pow(eachArr, 2) === eachArr2 ? true : false

}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
// console.log(comp([121, 14641]))
// console.log(comp([34, 20736]))

