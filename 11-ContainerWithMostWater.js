// function maxArea(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let maxArea = 0; 
//     for (let i = left; i < arr.length; i++) {
//         while (left < right) {
//             if (arr[right] <= arr[left]) {
//                 let area = arr[left] * (right - left);
//                 if (area > maxArea) maxArea = area;		
//             }
//             right--;
//             console.log('hrere')
//         }
//         console.log(maxArea)
//     } 
//     return maxArea; 
// }

function maxArea(arr) {
    let left = 0;
    let right = arr.length - 1;
    let maxArea = 0; 
    while (left < right) {
        let area = Math.min(arr[left], arr[right]) * (right - left); 
        if (area > maxArea) maxArea = area; 
        if (area[left] > area[right]) {
            right--;
        } else {
            left++;
        }
    }
    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
