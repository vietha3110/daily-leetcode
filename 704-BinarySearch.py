import math

def search(arr, target):
    left = 0 
    right = len(arr)
    while (left <= right and left < len(arr) and right <= len(arr)): 
        mid = math.floor((left + right) / 2)
        print(left, mid, right)

        if arr[mid] == target: 
            return mid
        elif arr[mid] > target:
            right = mid - 1
        else: 
            left = mid + 1
    return -1 


print(search([-1,0,3,5,9,12], 9))
