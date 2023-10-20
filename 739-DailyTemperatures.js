function dailyTemperature(arr) {
    const res = new Array(arr.length).fill(0); 
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = i + 1; 
        while (j < arr.length) {
            if (arr[i] < arr[j]) {
                res[i] = j - i;
                break;
            } else {
                if (res[j] === 0) {
                    break;
                } 
                j = res[j] + j;
            }
        }
    }
    return res;
}
