def productExceptSelf(nums):
    prefix = 1
    suffix = 1
    res = []
    for i in range(len(nums)):
        res.append(prefix)
        prefix *= nums[i]
       
    i = len(nums) - 1
    while i >= 0:
        res[i] *= suffix
        suffix *= nums[i]
        i -= 1
    return res

print(productExceptSelf([1,2,3,4]))
