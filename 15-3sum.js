// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
//time limited exceeded
// function twoSum(arr, target) {
//     let obj = {};
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] in obj) {
//             let j = obj[arr[i]];
//             res.push([j, i]);
//         }
//         obj[target - arr[i]] = i
//     }
//     return res
// }
// // function compare(arr1, arr2) {
// //     arr1.sort();
// //     arr2.sort();
// //     for (let i = 0; i < arr1.length; i++) {
// //         if (arr1[i] !== arr2[i]) {
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // function check(arr, ele) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (!compare(arr[i], ele)) {
// //             count++;
// //         }
// //     }
// //     return count === arr.length;
// // }
// function normalizeArr(arr) {
//     return JSON.stringify(arr.sort((a, b) => a - b));
// }

// function getUniqueNums(nums) {
//     return new Set(nums).values();
// }

// function threeSum(nums) {
//     nums = getUniqueNums(nums);
//     const res = [];
//     const storage = {

//     }
//     const check = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         storage[i] = nums[i];
//     }
//     for (let key in storage) {
//         let sum = twoSum(nums, 0 - storage[key]); 
       
//         if (sum && sum.length > 0) {
//             for (let ele of sum) {
//                 let j = ele[0];
//                 let k = ele[1];
//                 if (+key !== j && +key !== k && j !== k) {
//                     if (res.length === 0) {
//                         check.set(normalizeArr([nums[j], nums[k], storage[key]]), 1)
//                         res.push([nums[j], nums[k], storage[key]]);
//                     } else {
//                         let temp = normalizeArr([nums[j], nums[k], storage[key]]);
//                         if (!(check.has(temp))) {
//                             check.set(normalizeArr([nums[j], nums[k], storage[key]]), 1)
//                             res.push([nums[j], nums[k], storage[key]]);
//                         } 
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// }
function normalizeArr(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return sorted.toString();
}


function threeSum(nums) {
    const res = [];
    const check = new Set();
    const firstEle = new Map(); 
    for (let j = 0; j < nums.length; j++) {
        for (let k = 0; k < j; k++) {
            const target = -nums[j] - nums[k];
            if (firstEle.has(target)) {
                const i = firstEle.get(target);
                const triplet = [nums[i], nums[j], nums[k]];
                const normalizedTriplet = normalizeArr(triplet);
                if (i < k && !check.has(normalizedTriplet)) {
                    check.add(normalizedTriplet);
                    res.push(triplet);
                }
                
            }
        }
        if (!firstEle.has(nums[j])) {
            firstEle.set(nums[j], j);
        }
    }
    return res;
}





// //     ))
// // console.log(twoSum([-1,0,1,2,-1,-4,-2,-3,3,0,4], -4))

// // console.log(check([[-4,0,4],[-4,1,3],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]], [-3,-1,4]))
// console.log(threeSum(nums=[-1,0,1,2,-1,-4]
//     ))

// Two pointer
// function threeSum(arr) {
//     const res = [];
//     arr = arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         const twoSum = 0 - arr[i];
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right && right <= arr.length - 1) {
//             if (arr[left] + arr[right] < twoSum) {
//                 left++;
//             } else if (arr[left] + arr[right] > twoSum) {
//                 right--;
//             } else { 
//                 res.push([arr[i],arr[left], arr[right]]);
//                 left++;
//                 right--;
//             }
//         }

//     } 
//     return res;
   
// }
// console.log(threeSum(nums =[-1,0,1,2,-1,-4]))
