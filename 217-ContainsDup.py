def containDup(nums):
    dict_chars = {}
    i = 0 
    while i < len(nums): 
        if nums[i] in dict_chars: 
            dict_chars[nums[i]] += 1
        else:
            dict_chars[nums[i]] = 1
        i += 1

    dup_lst = [k for k, v in dict_chars.items() if v > 1]
    if len(dup_lst) > 0: 
        return True
    else:
        return False
