def countBits(n):
    res = []
    for i in range(n + 1): 
        res.append(0)
    for i in range(1,len(res)):
        res[i] = res[i >> 1] + (i & 1)
    return res
print(countBits(5))
