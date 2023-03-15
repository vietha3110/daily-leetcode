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

// function maxArea(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let maxArea = 0; 
//     while (left < right) {
//         let area = Math.min(arr[left], arr[right]) * (right - left); 
//         if (area > maxArea) maxArea = area; 
//         if (area[left] > area[right]) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return maxArea;
// }

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))



function maxArea(arr) {
    let left = 0; 
    let right = arr.length - 1;
    let maxArea = 0;
    while (left < right) {
        const currArea = Math.min(arr[left], arr[right]) * (right - left); 
        if (currArea > maxArea) {
            maxArea = currArea;
        }
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}


//Explaination 
//Approach: 
// Find the maximum area that the container was not slant 
// from line 60: width will be the diff of index. 
// we compare the height => choose the smaller cause we dont want to slant container => chose the height
//compare area => chose the highest
