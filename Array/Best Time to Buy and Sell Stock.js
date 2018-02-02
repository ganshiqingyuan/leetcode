//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
//2018 1 31
//js bird

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max=0
    for(var i=0;i<prices.length;i++){
        for(var j=i+1;j<prices.length;j++){
            if(prices[j]>prices[i]){
                max=Math.max(prices[j]-prices[i],max)
            }
        }
    }
    return max
};
//双层循环  600 多ms。。。。。O(mn)


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max=0
    var min=9999999
    for(var i=0;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i]
        }
        if(prices[i]>min){
            max=Math.max(max,prices[i]-min)
        }
    }
    return max
};

//一层循环   O(n) 100ms

