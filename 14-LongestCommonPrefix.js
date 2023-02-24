function longgestCommonPrefix(str) {
    let startWord = str[0];
    let result = "";
    
    for (let i = 0; i < startWord.length; i++) {
        for (let word of str) {
            if (startWord[i] !== word[i]) {
                return result;
            }
        }
        result += startWord[i]
    }
    return result;
}

console.log(longgestCommonPrefix(["flower", "floor", "flop"]))
