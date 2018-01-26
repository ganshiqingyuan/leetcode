//https://leetcode.com/problems/array-partition-i/description/
//2018 1 26
//js bird

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort(function(a,b){return a-b});
    var result=0
    for(var i=0;i<nums.length-1;i=i+2){
        result+=nums[i];
    }
    return result
};
//这题，，，，900多 差评。。。。。



