def removeElement(nums, val): 
    pointer = 0 
    i = 0 
    while (i < len(nums)):
        if (nums[i] != val):
            nums[pointer] = nums[i]
            pointer += 1
        i += 1
    return pointer
    