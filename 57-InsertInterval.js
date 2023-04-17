//Approach - Time complexity: O(N) 

function isOverlapped(a, b) {
    if (a[0] > b[0]) {
        return isOverlapped(b, a);
    }
    return a[1] >= b[0];
}

function merge(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}


function insertInterval(intervals, arr) {
    const res = [];

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (isOverlapped(interval, arr)) {
            arr = merge(interval, arr);
        } else {
            res.push(interval);
        }
    }
    let j = 0;
    let checked = false;
    for (let i = 0; i < res.length; i++) {
        if (i === 0 && res[i][0] > arr[0]) {
            j = i;
            checked = true;
        }
        if ((res.length === 1 && res[i][0] > arr[0]) || (i - 1 >= 0 && res[i][0] > arr[0] && res[i - 1][0] < arr[0])) {
            j = i;
            checked = true;
        }
    }
    if (checked && j >= 0) {
        res.splice(j, 0, arr);
    } else {
        res.push(arr);
    }
    return res;
   
} 

console.log(insertInterval([[2,5],[6,7],[8,9]]
    , [0,1]
    ))
