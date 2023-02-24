def removeDuplicates(arr): 
    i = 0 
    print(3, arr)
    while i < len(arr): 
        if arr[i] == arr[i + 1]: 
            arr = arr[i + 1 : len(arr) - 1]
            print(arr)
        i += 1
    return len(arr)

print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
