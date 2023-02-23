// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

function twoSum(arr, target) {
    let obj = {}; 
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            let j = obj[arr[i]];
            result.push(j, i);
            return result;
        }
        obj[target - arr[i]] = i
    }
}

console.log(twoSum(arr=[3,2,4], target = 6))
