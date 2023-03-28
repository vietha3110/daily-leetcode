def twoSum(numbers, target):
    left = 0 
    right = len(numbers) - 1
    while left < right: 
        diff_left = target - numbers[left]
        diff_right = target - numbers[right]
        if diff_left > numbers[right]: 
            left += 1
        elif diff_right < numbers[left]:
            right -= 1
        else: 
            return [left + 1, right + 1]
    return []

print(twoSum([2,7,11,15],9))
