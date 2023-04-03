// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3


// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
function majorityElement(nums) {
    let candidate = 0;
    let count = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count++;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

console.log(majorityElement(nums = [3,3,4]))
