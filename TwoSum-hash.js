// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // You may assume that each input would have exactly one solution, and you may not use the same element twice.

// // You can return the answer in any order.
// var twoSum = function (nums, target) {
//     const numsMap = new Map();
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (numsMap.has(nums[i])) {
//             result.push(i, numsMap.get(nums[i]));
//             return result;
//         }
//         numsMap.set(target - nums[i], i)
//     }
// }

// let nums = [3, 3], target = 6;
// console.log(twoSum(nums, target))

console.log(Math.floor(7/2))
