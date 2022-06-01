// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
// your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, 
// write a function that tells you if it is possible to get to the pump or not. Function should 
// return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. 
// The input values are always positive.

//p: parameters number
//r: true or false if the amount of gallons remaining and the miles remaining  is greater than or equal to distance to pump
//e: assert.equal(zeroFuel(50, 25, 2), true);
    //assert.equal(zeroFuel(100, 50, 1), false);
//p: first calculate your diestance by multiplying the miles per gallon and the amount of gallons left and then
//create a conditional to check it you will make it

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let distance = mpg * fuelLeft
  return distance >= distanceToPump ? true : false
};

console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))