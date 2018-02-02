//https://leetcode.com/problems/sort-colors/description/
//2018 2 2
//js bird

Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.






/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var result=[]
    var last=[]
    var index=0
    var i=0
    while(index<nums.length){
        if(nums[i]==0){
            index++
            var a=nums[i]
            nums.splice(i,1)
            nums.unshift(a)
            i++
        }
        else if(nums[i]==2){
            var b=nums[i]
            nums.splice(i,1)
            nums.push(b)
            index++
        }
        else{
            i++
        index++
        }
    }

    
};
//O（n）    前后插入中间不变

