function topKFrequent(nums, k) {
    let objNum = {};
    for (let num of nums) {
        if (num in objNum) {
            objNum[num]++;
        } else {
            objNum[num] = 1
        }
    }
    let entries = Object.entries(objNum).sort((a, b) => b[1] - a[1]);
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(entries[i][0]);
    }
    return res;


}

console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2))
