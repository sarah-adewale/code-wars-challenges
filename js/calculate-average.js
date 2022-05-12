function find_average(array) {
let avg = array.reduce((acc, c) => acc + c, 0) / array.length 
  // your code here
if(array.length == []){
  return 0
}else{
  return avg
}
  
}

console.log(find_average([1,1,1]))
console.log(find_average([]))