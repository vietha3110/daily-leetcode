/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// var reverseList = function (head) {
//     function innerReverse(curr, prev = null) {
//         if (!curr) {
//             return prev;
//         }
//         let next = curr.next;
//         curr.next = prev;
//         return (next, curr);
//     }

//     return innerReverse(head, null);
// }
var rotate = function(nums, k) {
    let arr = (nums.slice(0, k + 1));
    console.log(arr)
    nums.concat(arr)
    return nums
};
let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
console.log(rotate(nums, k))
