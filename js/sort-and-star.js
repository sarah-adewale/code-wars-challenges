// You will be given a vector of strings. You must sort it alphabetically 
//(case-sensitive, and based on the ASCII values of the chars) and then return the 
//first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
//p: array, strings
//r: first value sorted string with *** in-between
//p: first sort the string alphabetically, return then join with *** between


function twoSort(s) {
    let sorted = s.sort()
    return sorted[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // 'b***i***t***c***o***i***n' 
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // 'a***r***e'