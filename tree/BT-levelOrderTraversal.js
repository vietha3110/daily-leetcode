// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// https://leetcode.com/problems/binary-tree-level-order-traversal/
function levelOrder(root) {
    let result = [];
    if (!root) {
        return result;
    }

    const queue = [root]; 

    while (queue.length) {
        let size = queue.length;
        const innerResult = []
        while (size) {
            let node = queue.shift();
            innerResult.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            size--;
        }
        result.push(innerResult);
    }
    return result;
}
