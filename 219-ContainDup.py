def containsNearbyDuplicate(nums, k): 
    result = {}
    i = 0
    while i < len(nums): 
        if (nums[i] in result and i - result[nums[i]] <= k):
            return True
        result[nums[i]] = i 
        i += 1

    return False 
            
