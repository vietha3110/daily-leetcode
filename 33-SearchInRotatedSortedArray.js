// function search(nums, target) {
//     let j; 
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i + 1]) {
//             j = i + 1;
//             break;
//         }
//     }
//     if (j) {
//         if (target === nums[j]) {
//             return j;
//         } else if (target <= nums[j - 1] && target >= nums[0]) {
//             for (let i = 0; i < j; i++){
//                 if (nums[i] === target) {
//                     return i;
//                 }
//             }
//             return -1;
//         } else {
//             for (let i = j; i < nums.length; i++){
//                 if (nums[i] === target) {
//                     return i;
//                 }
//             }
//             return -1;
//         }

//     } else {
//         let left = 0;
//         let right = nums.length - 1;
//         while (left <= right) {
//             let mid = Math.floor((right + left) / 2); 
//             if (nums[mid] === target) {
//                 return mid;
//             } else if (nums[mid] < target) {
//                 left = mid + 1; 
//             } else if (nums[mid] > target) {
//                 right = mid -1;
//             }
//         }
//         return -1; 
//     }
    
// }


// console.log(search(nums = [5,1,3], target = 3))



function binarySearch(arr, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}


function search(nums, target) {
    let j; 
    let res; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            j = i + 1;
            break;
        }
    }
    if (j) {
        if (target === nums[j]) {
            return j;
        } else if (target <= nums[j - 1] && target >= nums[0]) {
            res = binarySearch(nums, target, 0, j - 1);
            return res;
        } else {
            res = binarySearch(nums, target, j, nums.length - 1);
            return res;
        }

    } else {
        res = binarySearch(nums, target, 0, nums.length - 1);
        return res
    }
    
}
console.log(search(nums = [5,1,3], target = 3))
