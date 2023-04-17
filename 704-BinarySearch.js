function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2); 
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else if (arr[mid] > target) {
            right = mid -1;
        }
    }
    return -1;
}
console.log(search([-1,0,3,5,9,12], 9))
