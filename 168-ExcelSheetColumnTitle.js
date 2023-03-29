// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

function convertToTitle(num) {
    const alphabetNum = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        26: "Z"
    };
    const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"] 
    // let result = "";
   
    // while (num > 26) {
        
    //     result = alphabetNum[num % 26] + result;
    //     num = Math.floor(num / 26);
    //     console.log(result)
    // }
    // if (num <= 26) {
    //     result = alphabetNum[num] + result;
    //     console.log(result);
    // }
    // return result;
    let res = "";
    while (num > 26) {
        num % 26 === 0 ? res = alphabetArr[25] + res : res = alphabetArr[num % 26 - 1] + res;
        num = Math.floor(num / 26);
    }
    if (num <= 26) {
        res = alphabetArr[num -1] +res
    }
    
 
    return res;
}

console.log(convertToTitle(52))
