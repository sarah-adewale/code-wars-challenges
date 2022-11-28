function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
console.log(replace('hello'))