def dailyTemperature(arr): 
    res = [0] * len(arr)
    i = len(arr) - 1
    while (i >= 0):
        j = i + 1 
        res[i] = 0
        while (j < len(arr)):
            if (arr[i] < arr[j]):
                res[i] = j - i 
                break
            else: 
                if res[j] == 0:
                    break
                j = j + res[j]
        i = i - 1
    return res

print(dailyTemperature([73,74,75,71,69,72,76,73]))
