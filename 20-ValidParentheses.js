// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValidParentheses(s) {
    const valid = [];
    for (let item of s) {
        if (item === "(" || item === "[" || item === "{") {
            valid.push(item);
        } else if (item === "}" && valid.length !== 0 && valid[valid.length - 1] === "{") {
            valid.pop();
        } else if (item === "]" && valid.length !== 0 && valid[valid.length - 1] === "[") {
            valid.pop();
        } else if (item === ")" && valid.length !== 0 && valid[valid.length - 1] === "(") {
            valid.pop();
        } else {
            return false;
        }
    }
    return valid.length === 0;

}

console.log(isValidParentheses ("()[]{}"))
