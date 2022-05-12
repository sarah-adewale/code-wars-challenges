/*
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'random
/*
p: string ? number ? array
r: return a string that says 'found the needle at index'
e:
p: write a function that takes in a array
*/
function findNeedle(arr){
  // find the index of needle
  index = arr.indexOf('needle') //indexOf is always associated with the dot notation
  return `found the needle at ${index}`
}

// return string
// 


console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'random']))