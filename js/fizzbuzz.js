// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 
// 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// function fizzBuzz(n){
    // for(let i = 0; i<=100; i++){
    //     if(i % 3 === 0 && i % 5 === 0){
    //         console.log('fizbuzz') 
    //     }else if(i % 3 === 0){
    //         console.log('fizz') 
    //     }else if(i % 5 === 0){
    //         console.log('buzz') 
    //     }else{
    //         console.log(i)
    //     }
    // }

    for(leti = 0; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return 'fizzBuzz'
        }else if(i % 3 === 0){
            return 'fizz'
        }else if(i % 5 === 0){
            return 'buzz'
        }else{
            return i
        }
    }


console.log(fizzBuzz(100))