// Write a function that when given a URL as a string, parses out just the domain 
// name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//string, it will never be empty, no there wouldnt be number, yes, it is a 
// singular word, small
// string

console.log(domainName("http://github.com/carbonfive/raygun"), 'github' )
console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites' )
console.log(domainName("https://www.cnet.com"), 'cnet' )

//create a function called domainName, give it a parameter called domain
function domainName(domain){
//use split('/')
let firstUrl =  domain.replace('http://', '')
let secondtUrl =  firstUrl.replace('https://www.', '')
let thirdUrl = secondtUrl.replace('www.', '')
let lastVal = thirdUrl.split('.').slice(0,1).join('')
return lastVal
}

