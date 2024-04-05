function kidsWithCandies(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map((candy) => candy + extraCandies >= max);
}