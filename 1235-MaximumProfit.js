function isOverlapped(a, b) {
    if (a[0] > b[0]) {
        return isOverlapped(b, a);
    }
    return a[1] > b[0];
}


function jobScheduling(startTime, endTime, profit) {
    let maxProfit = Math.max(...profit);
    const arr = [];
    for (let i = 0; i < startTime.length; i++) {
        arr.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    arr.sort((a, b) => a.start - b.start);


    // for (let i = 0; i < startTime.length; i++) {
    //     let currProfit = profit[i];
    //     let temp = 0;
    //     for (let j = i + 1; j < startTime.length; j++) {
           
    //         if (isOverlapped([startTime[i], endTime[i]], [startTime[j], endTime[j]])) {
    //             continue;
    //         } else {
    //             if (j - 1 !== 0 && isOverlapped([startTime[j - 1], endTime[j - 1]], [startTime[j], endTime[j]]) && !isOverlapped([startTime[i], endTime[i]], [startTime[j - 1], endTime[j - 1]])) {
    //                 temp = currProfit
    //                 currProfit= profit[i] + profit[j];
    //             } else {
    //                 currProfit += profit[j];
    //             }
    //         }
    //     }
    //     if (temp > currProfit) currProfit = temp;
    //     if (currProfit > maxProfit) maxProfit = currProfit
        
    // }
    // return maxProfit;
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let currProfit = arr[i].profit;
        let temp = 0; 
        for (let j = i + 1; j < arr.length; j++) {
            if (isOverlapped([arr[i].start, arr[i].end], [arr[j].start, arr[j].end])) {
                continue;
            } else {
                if (j - 1 !== 0 && isOverlapped([arr[j - 1].start, arr[j - 1].end], [arr[j].start, arr[j].end]) && !isOverlapped([arr[i].start, arr[i].end], [arr[j - 1].start, arr[j - 1].end])) {
                    temp = currProfit;
                    currProfit = arr[i].profit + arr[j].profit;
                
                } else {
                    currProfit += arr[j].profit;
                    console.log(currProfit)
               }
            }
            // console.log(currProfit, temp)
        }
        if (temp > currProfit) currProfit = temp; 
        if (currProfit > maxProfit) maxProfit = currProfit
        // console.log(currProfit, temp, arr[i].profit)
    }
    return maxProfit;

}

console.log(jobScheduling( startTime = [6,15,7,11,1,3,16,2], endTime = [19,18,19,16,10,8,19,8]
    , [2,9,1,19,5,7,3,19]
    ))
//[6,15,7,11,1,3,16,2]
//[19,18,19,16,10,8,19,8]
//[2,9,1,19,5,7,3,19]
