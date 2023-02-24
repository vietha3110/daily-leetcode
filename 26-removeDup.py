def removeDuplicates(arr): 
    pointer = 0 
    i = 0 
    while i < len(arr):
        if (i + 1 == len(arr) or arr[i] != arr[i + 1]):
            arr[pointer] = arr[i]
            pointer += 1
        i += 1
    return pointer

print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
