function spiralOrder(matrix) {
    let m = matrix.length; 
    let n = matrix[0].length;
    let left = 0; 
    let right = n - 1;
    let top = 0; 
    let bot = m - 1;
    const result = [];
   
    while (left <= right && top <= bot) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[left][i]);
        }
        for (let i = top + 1; i <= bot; i++) {
            result.push(matrix[i][right]);
            console.log(matrix[i][right])
        }
        if (top < bot) {
            for (let i = right -1; i >= left; i--) {
                result.push(matrix[bot][i])
            }
        }
        if (left < right) {
            for (let i = bot - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bot--;
    }
    return result
    
}

console.log(spiralOrder(matrix = [[1,2,3],[4,5,6],[7,8,9]]))
