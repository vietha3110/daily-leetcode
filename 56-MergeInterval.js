// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

const e = require("express");

// function intervals(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         const current = arr[i];
//         const next = arr[i + 1];
//         console.log(i, current, next)
//         if (current[0] <= next[0] && current[1] > next[0]) {
//             if (current[1] <= next[1]) {
//                 arr[i][1] = next[1];
//                 arr.splice(i + 1, 1);
//                 i--;
//                 console.log(16)
//             }
//         } else if (current[0] <= next[0] && current[1] <= next[0]) {
//             if (next[0] === current[1] ) {
//                 arr[i][1] = next[1];
//                 arr.splice(i + 1, 1);
//                 i--;
//                 console.log(17)
//             } 
//         } else if (next[0] < current[0] && next[1] <= current[0]) {
//             if (next[1] === current[0]) {
//                 arr[i][0] = next[0];
//                 arr.splice(i + 1, 1);
//                 i--;
//                 console.log(18)
//             }
//         } else if (next[0] < current[0] && next[1] > current[0]) {
//             if (next[1] >= current[1]) {
//                 arr[i][0] = next[0];
//                 arr[i][1] = next[1]; 
//                 arr.splice(i + 1, 1);
//                 i--;
//                 console.log(19)
//             } else {
//                 arr[i][0] = next[0];
//                 arr.splice(i + 1, 1);
//                 i--;
//                 console.log(20)
//             }
//         }
//         console.log(arr)
//     }
//     return arr;
    
// }
// console.log(intervals([[ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 1, 10 ]]
//     ))




function intervals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i >= 0) {
            for (let j = i + 1; j < arr.length; j++) {
                const current = arr[i];
                const next = arr[j];
                if (j > 0) {
                    if (current[0] <= next[0] && next[0] < current[1]) {
                        if (current[1] <= next[1]) {
                            // arr[i][1] = next[1];
                            // arr.splice(j, 1);
                            arr[j][0] = current[0];
                            arr.splice(i, 1);
                            j--;
                            i--;
                        } else {
                            arr[j][0] = current[0];
                            arr[j][1] = current[1];
                            arr.splice(i, 1);
                            j--
                        }
                    } else if (current[0] <= next[0] && next[0] >= current[1]) {
                        if (next[0] === current[1]) {
                            // arr[i][1] = next[1];
                            // arr.splice(j, 1);
                            arr[j][0] = current[0];
                            arr.splice(j, 1);
                            i--;
                            j--;
                        }
                    } else if (next[0] < current[0] && next[1] <= current[0]) {
                        if (next[1] === current[0]) {
                            arr[i][0] = next[0];
                            arr.splice(j, 1);
                            i--;
                            j--;
                        }
                    } else if (next[0] < current[0] && next[1] > current[0]) {
                        if (next[1] >= current[1]) {
                            // arr[i][0] = next[0];
                            // arr[i][1] = next[1];
                            // arr.splice(j, 1);
                            // j--;
                            arr.splice(i, 1);
                            i--;
                            j--;
                        } else {
                            // arr[i][0] = next[0];
                            // arr.splice(j, 1);
                            arr[j][1] = current[1];
                            j--;
                            i--;
                        }
                    }
                }
                console.log(arr)
                console.log(i)
                
            }
        }
        
      
    }
    return arr;
}
console.log(intervals([[1,3],[2,6],[8,10],[15,18]]))
