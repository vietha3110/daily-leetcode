// function longgestConsecutive(nums) {
//     if (nums.length <= 1) {
//         return nums.length;
//     } 
//     nums = nums.sort((a, b) => a - b);
//     let max = 1;
//     // let count = 1; 
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (i === nums.length - 1) {
//     //         max = Math.max(max, count);
//     //     } else if (nums[i] + 1 === nums[i + 1]) {
//     //         count++;
//     //     } else if (nums[i] !== nums[i + 1]) {
//     //         max = Math.max(max, count);
//     //         count = 1;
//     //     }
//     // }
    
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i == 0 || nums[i - 1] != nums[i]) {
//             count = 1;
//         } else {
//             count++;
//         }
//         max = Math.max(max, count);
//     }
//     return max;
// }

// console.log(longgestConsecutive( nums = [1, 2, 4, 5, 6, 7]))


function longgestConsecutive(nums) {
    const exists = new Set();
    for (let num of nums) {
        exists[num] = true;
    }
    
    const len = {};

    for (let i = 0; i < nums.length; i++) {
        if (!((nums[i] + 1) in exists)) {
            len[nums[i]] = 1;
        } 
        if (nums[i] + 1 in exists && nums[i + 1] in len) {
            len[nums[i]] = len[nums[i] + 1] + 1;
        }
        if (nums[i] + 1 in exists && !(nums[i] + 1) in len) {
          
            for (let j = i; j < nums.length; j++) {
                if (!(nums[j] + 1) in exists) {
                    len[nums[j]] = 1;
                    len[nums[i]] = len[nums[j]] + 1;
                } else if (nums[j] + 1 in exists && nums[j] + 1 in len) {
                    len[nums[j]] = len[nums[j] + 1] + 1; 
                    len[nums[i]] = len[nums[j]] + 1;
                }
            }
            nums[i]++;
        }

    }






}
console.log(longgestConsecutive( nums = [1, 2, 4, 5, 6, 7,8,8]))
