def twoSum(list, int): 
    i = 0
    while i < len(list): 
        j = i + 1 
        while j < len(list): 
            if ((list[i] + list[j]) == int):
                return [i, j]
            j += 1
        i += 1


print(twoSum([2,7,11,15], 9))    
