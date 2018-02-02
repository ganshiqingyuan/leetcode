//https://leetcode.com/problems/contains-duplicate-ii/description/
//2018 1 31
//js bird

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map=new Map()
    for(var i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],i)
        }
        else{
            if(i-map.get(nums[i])<k+1){
                return true
            }
            else{
                map.set(nums[i],i)
            }
        }
    }
    return false
};
//map  解决最快速

