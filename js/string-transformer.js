// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to 
// lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//string
//string
function stringTransformer(str){
    str = str.split(' ')
    let reversedString = str.reverse()
    let newStr = ''
    reversedString.map((item) => {
        if(item === item.toLowerCase()){
            newStr += item.toUpperCase()
        }
    })
    return newStr
}


console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE')
console.log(stringTransformer('SaraH ADewale'), 'adEWALE sARAh')