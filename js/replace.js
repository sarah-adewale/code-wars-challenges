//   create a function that replaces values less than 5 with 0 and values more than 5 with 1 
  
  function fakeBin(x){
    let splittedArray = x.split('')
      return splittedArray.map(a => a < 5 ? 0 : 1).join('')
  }
  
  console.log(fakeBin('3,4,5'))


  function innitArray(x){
  let newArray = x.map(a => a < 5 ? 0 : 1 )
  	return newArray
  }
  
   console.log(innitArray([7, 3, 8, 2, 4, 0]))