



const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let sum = 0
for(let i = begin; i <= end; i+=step){
    sum += i
}
return sum
};

console.log(sequenceSum(2,6,2))