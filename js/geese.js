/*
Write a function that takes a list of strings as an argument and returns a filtered list containing 
the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

return a new filtered array
*/

function notIncludeGeese(birds){
    const geese = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    return birds.filter(item => !geese.includes(item))
}

console.log( notIncludeGeese(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) )