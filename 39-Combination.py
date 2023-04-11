def attemp(candidates, target, max_value): 
    res = []
    for i in range(len(candidates)):
        if candidates[i] <= max_value:
            if candidates[i] == target: 
                res.append([candidates[i]])
            elif candidates[i] < target: 
                subs = attemp(candidates, target -  candidates[i], candidates[i])
                for j in range(len(subs)): 
                    subs[j].append(candidates[i])
                    res.append(subs[j])

    return res


def combinationSum(candidates, target):
    max_value = max(candidates)
    return attemp(candidates, target, max_value)


print(combinationSum([2,3,7], 18))
