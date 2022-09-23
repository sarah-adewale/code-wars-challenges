// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. 
// Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


// COPY

// COPY
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:


// COPY

// COPY
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

//parameter - string
//return value - string 
//examples 
// console.log(string('"PRO-TIP #498: IT'S NICE TO SAY HELLO."')) //  "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// console.log(string('1')) // 'I'
// console.log(string('2')) // 'Z'
// console.log(string('3')) // 'E'
// console.log(string('4')) // 'h'
// console.log(string('5')) // 'S'
// console.log(string('6')) // 'G'
// console.log(string('7')) // 'L'
// console.log(string('8')) // 'B'
// console.log(string('9')) // 'q'

//pseudo
//create a function called string, give it a parameter
function string(n){
    //create a loop with a conditional to check for the present of the value in the string. use string method .includes() 
    // to check if the value exists in the string
     n = n.split('')
//    return n.map((item) => {
//     if(item.includes(0)){
//         return 'O'
//     }else if(item.includes(1)){
//         return 'I'
//     }else if(item.includes(2)){
//         return 'Z'
//     }else if(item.includes(3)){
//         return 'E'
//     }else if(item.includes(4)){
//         return 'h'
//     }else if(item.includes(5)){
//         return 'S'
//     }else if(item.includes(6)){
//         return 'G'
//     }else if(item.includes(7)){
//         return 'L'
//     }else if(item.includes(8)){
//         return 'B'
//     }else if(item.includes(9)){
//         return 'q'
//     }else{
//         return item
//     }
//    }).join('')
   
    // return n

    return [...n].map(a => ({'0':'O','5':'S','1':'I', '2':'Z', '3':'E', '4':'h', '6':'G', '7':'L', '8':'B', '9':'q'})[a]||a).join('')
}


//if the value exists, exchange it with the correct value

console.log(string("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")) // 'O'
// console.log(string('1')) // 'I'
// console.log(string('2')) // 'Z'
// console.log(string('3')) // 'E'
// console.log(string('4')) // 'h'
// console.log(string('5')) // 'S'
// console.log(string('6')) // 'G'
// console.log(string('7')) // 'L'
// console.log(string('8')) // 'B'
// console.log(string('9')) // 'q'