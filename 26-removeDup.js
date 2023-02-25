// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i + 1, 1);
//             i--;
//         }
//     }
//     return nums;
// };
var removeDuplicates = function (nums) {
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length  || nums[i] !== nums[i + 1]) {
            nums[pointer] = nums[i];
            console.log(nums)
            pointer++;
        }
    }
    return pointer
}











console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
