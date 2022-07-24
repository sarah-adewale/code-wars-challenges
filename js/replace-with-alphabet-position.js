// Welcome.

// In this kata you are required to, given a string, replace every letter with its 
// position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 
// 3 11" ( as a string )

//parameter is a string
// return the position(index) of individual character as is in the alphabet
// split? loops?  

function alphabetPosition(text) {
    let char = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let textNew = text.toLowerCase().split('')
    let arr = []
    let idx = textNew.map((element) => char.indexOf(element) + 1)
    arr.push(idx.join(' '))
    return arr
}


function alphabetPosition(text) {
    let char = 'abcdefghijklmnopqrstuvwxyz'
    let charNew = []
    text = text.toLowerCase()
    // return textNew.filter((item) => !char.includes(item));
   for(let i = 0; i <= text.length; i++){
    let idx = char.indexOf(text[i])
    if(idx === -1){
        continue;
    }else{
        charNew.push(idx + 1)
    }
   }
//    let ans =  textNew.map((element) => char.indexOf(element) + 1)
//    let tired = ans.join('')
   return charNew.join(' ')
}

// var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
// var alphabetPosition = text => 
//   text.split('').map(x => alphabet.indexOf(x) + 1).join(' ');

// const lineNumberHandler = (arr) => {
//     const alphabet = 'abcdefghijklmnopqrstuwxyz';
//     return arr.map((el) => alphabet.indexOf(el) + 1);
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))