def single_number(arr):
    res = 0
    for i in range(len(arr)):
        res = res ^ arr[i]
    return res
