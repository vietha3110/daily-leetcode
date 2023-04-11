// // Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// // The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// // frequency
// //  of at least one of the chosen numbers is different.

// // The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// // Input: candidates = [2,3,6,7], target = 7
// // Output: [[2,2,3],[7]]
// // Explanation:
// // 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// // 7 is a candidate, and 7 = 7.
// // These are the only two combinations.
// // Input: candidates = [2,3,5], target = 8
// // Output: [[2,2,2,2],[2,3,3],[3,5]]

// function normalizedArr(arr) {
//     const sorted = arr.sort((a, b) => a - b);
//     return sorted.toString();
// }

// // Returns all possible sums of candidates having values <= maxValue.

function attempt(candidates, target, maxValue) {
    const res = [];
    for (let candidate of candidates) {
        if (candidate <= maxValue) {
            if (candidate === target) {
                res.push([candidate])
            } else if (candidate < target) {
                const subCandidates = attempt(candidates, target - candidate, candidate); 
                for (let element of subCandidates) {
                    element.push(candidate);
                    res.push(element);
                }
            }
        }
    }
    return res;
}

function combinationSum(candidates, target) {
    const maxValue = Math.max(...candidates);
    return attempt(candidates, target, maxValue);
}
console.log(combinationSum(candidates = [2,3,7], target = 18))





// Optimize check target that have combination;
// function attempt(exists, target, candidates, maxValue) {
//     if (!exists[target]) {
//         return [];
//     }
//     const result = [];
//     for (let lastNum of candidates) {
//         if (lastNum <= maxValue) {
//             if (target == lastNum) {
//                 result.push([lastNum]);
//             } else if (target > lastNum) {
//                 const arrays = attempt(exists, target - lastNum, candidates, lastNum);
//                 arrays.forEach(array => {
//                     array.push(lastNum);
//                     result.push(array);
//                 });
//             }
//         }
//     }
//     return result;
// }

// function combinationSum(candidates, target) {
//     const exists = {};
//     for (let t = 0; t <= 40; t++) {
//         for (let i = 0; i < candidates.length; i++) {
//             if (candidates[i] === t) {
//                 exists[t] = true;
//             } else {
//                 exists[t] = exists[t] || exists[t - candidates[i]];   
//             }
//         }
//     }
//     return attempt(exists, target, candidates, Infinity);
// }

// console.log(combinationSum(candidates = [2,3,7], target = 18))
