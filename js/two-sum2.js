// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not 
// use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time 
// complexity?

//array and an integer
//array that contains the indices of the numbers that its sumation equals the target
//[1,2,3], 4 ==> [0, 2] because 1 + 3 equals 4 and they are both in position 0 and 2

//create a function with two parameters
function twoSum(arr, target){
    const pairs = [] // create an array bucket
    const hash = {} //hashmaps is used to quickly look up values without having to go thru the whole list. 
    for(let i = 0; i <= arr.length; i++){
        const diff = target - arr[i]
        if(hash[diff] !== undefined){
            pairs.push(hash[diff], i)
        }else{
            hash[arr[i]] = i
        }

    }
    return pairs
}
//loop thru the array
//return the indices

console.log(twoSum([1,2,3], 4), [0, 2])