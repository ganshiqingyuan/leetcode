//https://leetcode.com/problems/maximum-subarray/description/
//2018 1 28
//js bird

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.





/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max=-9999999999
    var arry=new Array(nums.length)
    for(var i=0;i<arry.length;i++){
       arry[i]=nums[i]+(arry[i-1]>0?arry[i-1]:0)
        max=Math.max(max,arry[i])
    }
    

    return max
};
//  O(n)



