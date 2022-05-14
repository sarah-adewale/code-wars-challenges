/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1

result = 61000

my process
P: hours, minutes, seconds. strings? numbers?
R: time in milliseconds
E:
console.log(timeMinutesSeconds(0,1,1)61000)
P: create a function, give it 3 parameters 'hours, minutes, seconds'
calculate milliseconds
return output
*/

// function timeMinutesSeconds(h,m,s){
//     timeInMilliseconds = ((h*3600) + (m*60) + (s)) * 1000
//     return timeInMilliseconds
// }

// console.log(timeMinutesSeconds(0,1,1),61000)

// refactor for readability i think

function tellTimeNow(h, m, s){
    let hours = h * 3600
    let minutes = m * 60
    let seconds = s
    // use the formular
    timeInMilliseconds = (hours + minutes + seconds)*1000
    return timeInMilliseconds
}

console.log(tellTimeNow(0,1,1),61000)