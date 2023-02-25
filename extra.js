function modifyArr(arr, idx, val) {
    arr.push(null);
    for (let j = arr.length - 1; j > idx; j--) {
        arr[j] = arr[j - 1];
    } 
    arr[idx] = val;
    console.log(arr)
}

console.log(modifyArr([5,7,1,3,2,4], 3, 10))


function deleteEle(arr, idx) {
    const result = arr[i];
    for (let i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return result;
}

console.log(deleteEle([5, 1, 2, 10, 7], 3))
