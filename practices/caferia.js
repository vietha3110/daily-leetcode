function getMaxAdditionalDinersCount(N, K, M, S) {
    S = S.sort((a, b) => a - b);
    let start = 1, end = S[0];
    let count = 0;
    for (let seat of S) {
        end = seat 
        count += getCount(start, end, K); 
        
        if (S.includes(start) && S.includes(end)) {
            count -= 2;
        } else if ((S.includes(start) || S.includes(end))) {
            count -= 1;
             
        } 
        start = seat    
        
    }
    count += getCount(start, N, K);
    return count 
}

function getCount(start, end, distance) {
     let count = end >= start ? Math.floor((end - start) / (distance)) : 0;
    return count
}

console.log(getMaxAdditionalDinersCount(N = 15, K = 2,M = 3,S = [11, 6, 14]))
