//https://leetcode.com/problems/subsets/description/
//2018 2 9
//js bird

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]






/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums==null){
        return []
    }
    function dg(arry,num){
        if(num==nums.length){
            return arry
        }
        var array=[]
        arry.forEach(data=>{
            array.push(data.concat(nums[num]))
        })
       return dg(array.concat(arry),++num)
    }
    return dg([[]],0)
};
//递归，   102秒

