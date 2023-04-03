def majority_element(lst): 
    candidate = 0 
    counter = 0 
    for i in range(len(lst)):
        if counter == 0: 
            candidate = lst[i]
        elif candidate == lst[i]: 
            counter += 1
        else:
            counter -= 1
    return candidate
