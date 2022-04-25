// There are pillars near the road. The distance between the pillars is the same and the 
//width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters 
//(without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
  return num_pill == 1  ? 0 : ((num_pill-2)*width) + ((100*dist)*(num_pill-1)) 
}

console.log(pillars(1, 10, 10))
console.log(pillars(2, 20, 25))
console.log(pillars(11, 15, 30))


// I just used a ternary conditional that checked if the number of pilars is 1, it'll return 0, 
//else, It'll multiply the number of pilars minus 2, by the width, so I can get the length of 
//all the pilars except for the first and the last one, and then I'll sum the distance by 100 so 
//I can get it in centimeters and the result of this by the number of pilars minus one, because 
//to get the sum of the lengths between two pillars I have to rest one, beacuse they are ordered 
//like this:

// | -- | -- | -- |

// So if there are 4 pillars, there are only 3 empty spaces that contain a length