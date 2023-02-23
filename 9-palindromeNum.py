def isPalindrome(x): 
    string_x = str(x)
    if string_x == string_x[::-1]:
        return True
    return False
print(isPalindrome(-121))
