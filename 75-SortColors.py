def sortColors(nums): 
    pointer = 0
    for i in range(len(nums)):
        if (nums[i] == 0):
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]]
            pointer += 1
    for i in range(pointer,len(nums)):
        if (nums[i] == 1): 
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]]
            pointer += 1
    return nums
