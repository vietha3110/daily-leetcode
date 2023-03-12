function groupAnagrams(strs) {
    const sortedStrs = strs.map(str => str.split("").sort().join(""));
    const countWords = {};
    for (let i = 0; i < strs.length; i++) {
        if (!(sortedStrs[i] in countWords)) {
            countWords[sortedStrs[i]] = [strs[i]]
        } else {
            countWords[sortedStrs[i]].push(strs[i])
        }
    }
    return Object.values(countWords);
}

console.log(groupAnagrams(strs = ["eat","tea","tan","ate","nat","bat"]))
