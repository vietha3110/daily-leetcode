function luckyNumber(matrix) {
    let m = 0;
    let n = 0;
    let min = +Infinity;
    let max = -Infinity;
    let res = [];
    while (m < matrix.length ) {
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[m][i] <= min) {
                min = matrix[m][i];
                n = i;
            }
        }
        for (let j = 0; j < matrix.length; j++){
            if (matrix[j][n] >= max) {
                max = matrix[j][n];
            }
        }
        if (min === max) {
            res.push(min);
            return res;
        }
        min = +Infinity;
        max = -Infinity;
        m++;
        n = 0;
    }
    return res;
}
console.log(luckyNumber(matrix = [[3,6],[7,1],[5,2],[4,8]]
    ))
