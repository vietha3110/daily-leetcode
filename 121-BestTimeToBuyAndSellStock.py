def maxProfit(prices):
    max_profit = 0
    start_price = prices[0]
    for i in range(1,len(prices)):
        profit = prices[i] - start_price
        if profit > max_profit:
            max_profit = profit
        if prices[i] < start_price: 
            start_price = prices[i]
    return max_profit
