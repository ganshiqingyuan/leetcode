//https://leetcode.com/problems/search-in-rotated-sorted-array/description/
//2018 1 25
//js bird

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left=0,right=nums.length;
    
    while(left<right){
        var mid=parseInt((left+right)/2)
        
        var num=(target<nums[0])==(nums[mid]<nums[0])
                ?nums[mid]:
                (target<nums[0]?-10000:10000)
        
        if(num<target){
            left=mid+1
        }
        else if(num>target){
            right=mid
        }
        else
            return mid
    }
    return -1
};
//要判断是在折线的哪边，，，，，，


return nums.indexOf(target)

//使用js封装好的。。。。简单。。。。。但是慢


