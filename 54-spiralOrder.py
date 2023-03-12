def spiralOrder(matrix): 
    m = len(matrix)
    n = len(matrix[0])
    left = 0 
    right = n - 1
    top = 0
    bot = m - 1
    result = []
    while left <= right and top <= bot: 
        for i in range(left, right + 1): 
            result.append(matrix[left][i])
        for i in range(top + 1, bot + 1):
            result.append(matrix[i][right])
        if top < bot: 
            i = right - 1 
            while i >= left: 
                result.append(matrix[bot][i])
                i -= 1
        if left < right: 
            i = bot - 1
            while i > top:
                result.append(matrix[i][left])
                i -= 1
        left += 1
        top += 1
        right -= 1
        bot -= 1
    
    return result

print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
