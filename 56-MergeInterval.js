// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

//Approach - Time complexity: O(N^2) but this approach is easy to understand.
// 1. Traverse all elements in the given Array. 
// 2. Check if consecutive element are isOverlapped. 
// 3. If they are overlapped merge them. 
// 4. Repeat step 2,3 til the end of array.

function isOverlapped(a, b) {
    if (a[0] > b[0]) {
        return isOverlapped(b, a);
    }
    return a[1] >= b[0];
}

function merge(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function mergeIntervals(arr) {
    const isRemoved = new Array(arr.length).fill(false);
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length; j++) {
            if (isRemoved[j]) {
                continue;
            }
            if (isOverlapped(arr[i], arr[j])) {
                arr[j] = merge(arr[i], arr[j]);
                isRemoved[i] = true;
            }
        }
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isRemoved[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(mergeIntervals([[2, 3], [4, 5], [6, 7], [1, 10]]));
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
