// Complete the function/method so that it returns the url with anything after the 
// anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//string
// return string with anything outside of the # removed
//split(''), initialize an empty string, loop, slice(i)

function removeUrlAnchor(url){
  return url = url.split('#').slice(0, 1).join('')
  
}

function removeUrlAnchor(url){
  return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about')) //"www.codewars.com"
console.log(removeUrlAnchor('www.codewars.com?page=1')) //"www.codewars.com?page=1"
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')) //'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')) //'www.codewars.com/katas/'