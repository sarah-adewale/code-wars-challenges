/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average 
point you may add your point to the given array

my process
p: 2 parameters. strings? numbers?
r: return the average score and compare your score
e: 
console.log(avgScore(30, 50), true)
console.log(avgScore(10, 40), true)
console.log(avgScore(30, 20), true)
p: create a function and give it two parameters
calculate the average score by adding your score and your classmates' and dividing it by their length
return the result and compare with your score
*/

function avgScore(classPoints, yourPoints){
    avgPoint = classPoints.reduce((acc, c) => acc + c, 0)/classPoints.length
    return yourPoints > avgPoint ? true : false
}

console.log(avgScore(30, 50), true)
console.log(avgScore(10, 40), true)
console.log(avgScore(30, 20), true)
