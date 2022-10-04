// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54
// 12+15+22+5=54
// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off 
// the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be 
// empty.

//string of lowercase letters, will always have letters in string
//number

const wordsToMarks = (word) => word.split("").reduce((acc, curr) => acc + curr.charCodeAt(0) - "a".charCodeAt(0) + 1, 0);

console.log(wordsToMarks('friendship'), 108)
console.log(wordsToMarks('love'), 54)

