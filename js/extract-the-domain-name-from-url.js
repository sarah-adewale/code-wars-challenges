// Write a function that when given a URL as a string, parses out just the domain 
//name and returns it as a string. For example:

//  url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//  url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//  url = "https://www.cnet.com"                -> domain name = cnet

// var tmp        = document.createElement ('a');
// ;   tmp.href   = "http://www.example.com/12xy45";


// function domainName(url){
//   return new URL(url).hostname;
// }

// console.log(domainName("http://github.com/carbonfive/raygun"))

// function domainName(url) {
//   const a = document.createElement('a');
//   a.href = url;
//   const { hostname } = a;
//   const hostSplit = hostname.split('.');
//   hostSplit.pop();
//   if (hostSplit.length > 1) {
//     hostSplit.shift();
//   }
//   return hostSplit.join();
// }



// const domainName = (domain) => domain.split('://')[1].split('/')[0].includes('www.') ? domain.split('://')[1].split('/')[0].split('www.')[1].split('.')[0] : domain.split('://')[1].split('/')[0].split('.')[0]


// const domainName = url => new URL(url).hostname.split(".").shift()
function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    return url.split('.')[0]
    // const name = hostname[2].split(".")
    // const domain = name.filter((item) => item !== "www").shift()
    // return domain
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("www.xakep.ru"))