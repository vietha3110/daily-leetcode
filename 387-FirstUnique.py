def firstUniqChar(s): 
    dict_char = {}
    i = 0
    
    while i < len(s): 
        if s[i] in dict_char: 
            dict_char[s[i]] += 1
        else: 
            dict_char[s[i]] = 1
        i += 1
    for key in dict_char: 
        if dict_char[key] == 1:
            return s.index(key)
    return -1

print(firstUniqChar("leetcode"))
