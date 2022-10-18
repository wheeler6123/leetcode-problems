/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //P: input will be two, one array of integers, and one single integer
 //R: return the indices of the two integers in array that will add up to the target integer
 //E: [2,7,11,15], 9 => [0,1] (the 0th and 1st index of the array contain 2 and 7, which add up to 9)
 //P: we know there can be only 1 solution and that each element can only be used once
    // can brute force using a for loop to check for each el + another el to add up to target


    var twoSum = function(nums, target) {
        let result = [];
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if (nums[i] + nums[j] === target){
                    return [i,j]
                }
            }
        } 
    }