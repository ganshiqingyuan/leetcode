//https://leetcode.com/problems/search-for-a-range/description/
//2018 1 26
//js bird

Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var left=0,right=nums.length,result=[-1,-1];
    while(left<right){
        var mid=parseInt((right+left)/2)
        if(nums[mid]<target){
            left=mid+1
        }
        else
            right=mid   
    }
    if(nums[left]!=target){
        return result
    }
    result[0]=left
    right=nums.length-1;
    while(left<right){
        var mid=parseInt((left+right)/2)+1
        if(nums[mid]>target){
            right=mid-1
        }
        else
            left=mid
    }
    result[1]=right
    return result
};
//时间复杂度O（logn）、、   思想就是二分法，，，，，


return [nums.indexOf(target),nums.lastIndexOf(target)]

//使用js封装好的。。。。简单。。。。。


