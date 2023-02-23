# def twoSum(list, int): 
#     i = 0
#     while i < len(list): 
#         j = i + 1 
#         while j < len(list): 
#             if ((list[i] + list[j]) == int):
#                 return [i, j]
#             j += 1
#         i += 1

def twoSum(nums, target):
    dict_num = {}
    list_result = []
    i = 0
    while i < len(nums):
        if (nums[i] in dict_num): 
            j = dict_num[nums[i]]
            list_result.append(i)
            list_result.append(j)
            return list_result
        dict_num[target - nums[i]] = i
        i += 1


print(twoSum([2,7,11,15], 9))    
