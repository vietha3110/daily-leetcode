def isAnagram(s,t): 
    if len(s) != len(t):
        return False
    count_char = {}
    for i in range(len(s)): 
        if (s[i] in count_char):
            count_char[s[i]] += 1
        else: 
            count_char[s[i]] = 1
    for i in range(len(t)):
        if (t[i] in count_char):
            count_char[t[i]] -= 1
    
    for key in count_char: 
        if (count_char[key] != 0):
            return False
    
    return True

print(isAnagram("rat", "car"))
