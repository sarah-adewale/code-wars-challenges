// An anagram is the result of rearranging the letters of a word to produce a new 
// word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of 
// each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
    let len1 = test.length
    let len2 = original.length
    if(len1 !== len2){
        return 'invalid input'
    }

    
    let str1 = test.toLowerCase().split('').sort().join('')
    let str2 = original.toLowerCase().split('').sort().join('')
    if(str1 === str2){
        return true
    }else{
        return false
    }

}

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("Twoo", "WooT"))
console.log(isAnagram("dumble", "bumble"))