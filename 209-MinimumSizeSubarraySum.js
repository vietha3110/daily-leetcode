function minSubArrayLen(target, nums) {
    let min = Infinity; 
    let sum = 0;
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            if (min >= end - start + 1) {
                min = end - start + 1;
            }
            sum -= nums[start];
            start++;
        }
    }
    if (min === Infinity) return 0;
    return min;
}
