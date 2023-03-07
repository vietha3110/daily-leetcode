function convertNum(str, num1, num2) {
    let strDec = 0;
    for (let i = str.length - 1, j = 0; i >= 0, j <= str.length - 1; i--, j++) {
        strDec += num1 ** i * (+str[j]);
    }
    let res = "";
    while (strDec > 0) {
        res = strDec % num2 + res;
        strDec = Math.floor(strDec / num2);
    }
    return res;
}

console.log(convertNum("1234", 10, 3))
