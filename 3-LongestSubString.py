def lengthOfLongestSubstring(s):
    max = 0
    start = 0
    chars = set()
    for i in range(0, len(s)):
        for j in range(start, len(s)): 
            if (s[j] not in chars): 
                chars.add(s[j])
                if max < (j - i + 1): 
                    max = j - i + 1
            else: 
                start = j
                chars.remove(s[i])
                break
    return max 

print(lengthOfLongestSubstring('abcabcbb'))
        