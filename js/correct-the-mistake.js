// Character recognition software is widely used to digitise printed texts. Thus the texts can 
//be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following 
//mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
  let splitString = string.split('')
  //let newArr = splitString.map((item) => item.indexOf('O') ? ) //splitString.indexOf('0') 
   for(let i = 0; i <= splitString.length; i++){
    if(splitString[i] === '5'){
        splitString[i] = 'S'
    }else if(splitString[i] === '1'){
        splitString[i] = 'I'
    }else if(splitString[i] === '0'){
        splitString[i] = 'O'
    }
   }
   return splitString.join('')
}

function correct(string) {
  return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}

console.log(correct("L0ND0N"))
console.log(correct("DUBL1N"))
console.log(correct("51NGAP0RE"))
console.log(correct("BUDAPE5T"))
console.log(correct("PAR15"))
// console.log(correct("BUDAPE5T"))