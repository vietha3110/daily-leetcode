def xor(arr): 
    v = 0
    for i in range(len(arr)):
        v = v ^ arr[i]
    return v
print(xor([1, 2, 5, 4, 6, 8, 9, 2, 1, 4, 5, 8, 9, 6]))
