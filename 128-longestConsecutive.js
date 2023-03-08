function longgestConsecutive(nums) {
    if (nums.length <= 1) {
        return nums.length;
    } 
    nums = nums.sort((a, b) => a - b);
    let res = [];
    let count = 1; 
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            res.push(count);
            break;
        } else if (nums[i] + 1 === nums[i + 1]) {
            count++;
        } else if (nums[i] === nums[i + 1]) {
            continue;
        } else {
            res.push(count);
            count = 1;
        }
    }
    return (Math.max(...res))
}

console.log(longgestConsecutive( nums = [0,3,7,2,5,8,4,6,0,1,9,10,0,2,19,12]))
