// What we want to implement is Array.prototype.filter() function, just like the 
//existing Array.prototype.filter(). Another similar function is _.filter() 
//in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined 
//for the purposes of this Kata.

Array.prototype.filter = function (func) {
   let len = this.length,
      res = new Array(),
      arr = this, counter=0, index = 0;
  for(counter; counter < len; counter++)
    if(func(arr[counter]))
       res[index++] = arr[counter];
    
  return res
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
}


