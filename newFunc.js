function convertNum(str, num1, num2) {
    let strDec = 0;
    let temp = 1; 
    // for (let i = str.length - 1; i >= 0; i--) {

    //     strDec += num1 ** i * (+str[str.length - 1 - i]);
        
    // }
    
    // for (let i = 0; i < str.length; i++) {
    //     strDec += temp * (+str[str.length - 1 - i]);
    //     temp *= num1;
    // }
    
    for (let i = 0; i < str.length; i++) {
        strDec = strDec * num1 + (+str[i]);
    }


    let res = "";
    while (strDec > 0) {
        res = strDec % num2 + res;
        strDec = Math.floor(strDec / num2);
    }
    return res;
}

console.log(convertNum("13", 10, 2))
