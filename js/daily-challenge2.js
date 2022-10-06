// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 3, print out “Fizz”; when it’s 
// divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print 
// out “Fizz Buzz”.

// number. the parameter will never be empty. 
// string fizz if the number is divisible by 3, buzz if the number is divisible by 5, 
//fizzbuzz, if it is neither divisible by 5, 3, or 5 abd 3... return the number


//create a function called fizzBuzz with a parameter of num
function fizzBuzz(num){
    //create a loop using the forloop
    for(let i = 1; i <= num; i++){
        //create a condtional to check for the values divisible by 3, 5, 3&5
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }else if(i % 3 === 0){
            console.log('fizz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
    //create a condtional to check for the values divisible by 3, 5, 3&5
}




console.log(fizzBuzz(7), 1, 2, 'fizz', 4, 'buzz' ) 
console.log(fizzBuzz(9), 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz' ) 
console.log(fizzBuzz(15), 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz' ) 

