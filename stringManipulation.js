// // A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// // The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// // Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.


function makeAnagram(a, b) {
    const charsWord1Count = getCharCountMap(a);
    const charsWord2Count = getCharCountMap(b);
    let countDeletedChars = 0;

    for (let [char, count] of charsWord1Count) {
        if (charsWord2Count.has(char)) {
            countDeletedChars += Math.abs(count - charsWord2Count.get(char));
            charsWord2Count.delete(char);
        } else {
            countDeletedChars += count;
        }
    }

    for (let count of charsWord2Count.values()) {
        countDeletedChars += count;
    }

    return countDeletedChars;
}

function getCharCountMap(word) {
    const charCount = new Map();
    for (let char of word) {
        const currentCount = charCount.get(char) || 0;
        charCount.set(char, currentCount + 1);
    }
    return charCount;
}



console.log(makeAnagram("fcrxzwscanmligyxyvym"
, "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))
