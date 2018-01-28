//https://leetcode.com/problems/jump-game/description/
//2018 1 28
//js bird

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.




/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    if(nums.length==1){
        return true
    }
    
    var arry=new Array(nums.length);
    arry[nums.length-1]=false
    if(!nums[0]){
return false}
    dp(0,nums[0])
    
    function dp(index,data){
        
            arry[index]=true;
            for(var i=0;i<data&&i<nums.length;i++){
                if(!arry[index+i+1])
                dp(index+i+1,nums[index+i+1])
            }
        
    }
    
    return arry[nums.length-1]
};
//  超时

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var reach=0
    for(var i=0;i<=reach&&i<nums.length;i++){
        
        reach=Math.max(reach,nums[i]+i)
    }
    
    return i==nums.length
};

//102 ms



