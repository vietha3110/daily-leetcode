function validSudoku(matrix) {
    for (let i = 0; i < 9; i++) {
        const row = new Set();
        const col = new Set();
        
        for (let j = 0; j < 9; j++) {
            if ((matrix[i][j] !== '.') && row.has(matrix[i][j])) {            
                return false;
            } else {
                row.add(matrix[i][j]);
            }

            if ((matrix[j][i] !== '.') && col.has(matrix[j][i])) {
                return false;
            } else {
                col.add(matrix[j][i]);
            }
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const row = new Set();
            const col = new Set();
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if ((matrix[i + m][j + n] !== '.') && row.has(matrix[i + m][j + n])) {
                        return false;
                    } else {
                        row.add(matrix[m][n]);
                    }
                    if ((+matrix[j + n][i + m] !== '.') && col.has(matrix[j + n][i +m])) {
                        return false;
                    } else {
                        col.add(matrix[n][m]);
                    }
        
                }
            }
        }
    }
    return true;
}


console.log(validSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));
