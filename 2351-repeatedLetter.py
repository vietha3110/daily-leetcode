def repeatedCharacter(s): 
    dict_chars = {}
    for i in range(len(s)):
        if (s[i] in dict_chars):
            return s[i]
        else: 
            dict_chars[s[i]] = 1
    return -1
