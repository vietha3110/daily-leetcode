def isPalindrome(x): 
    string_x = str(x)
    return string_x == string_x[::-1]
print(isPalindrome(-121))
