function containDup(nums) {
    let objChars = {};
    for (let num of nums) {
        if (num in objChars) {
            objChars[num]++;
        } else {
            objChars[num] = 1; 
        }
    }
    for (let key in objChars) {
        if (objChars[key] === 2) {
            return true;
        }
    }
    return false;
}


console.log(containDup(nums = [1,2,3,1]))
