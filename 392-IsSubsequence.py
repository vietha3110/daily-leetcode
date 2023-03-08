# def isSubsequence(s,t) :
#     count = 0 
#     if len(s) == 0:
#         return True
#     for i in range(len(t)): 
#         if (count < len(s) and s[count] == t[i]): 
#             count += 1
#     return count == len(s)


def isSubsequence(s,t):
    i = 0 
    j = 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]: 
            i += 1
        j += 1
    return i == len(s)
