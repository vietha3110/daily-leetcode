function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

console.log(bubbleSort([3,2,4,5,1,100,2,8]))
//Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order
