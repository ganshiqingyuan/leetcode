//https://https://leetcode.com/problems/majority-element/description/
//2018 1 24
//js bird

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.




/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map=new Map()
    for(var i=0;i<nums.length;i++){
        var aa=map.get(nums[i])||0
        if(aa){
            map.set(nums[i],aa+1)
            if(aa+1>nums.length/2)
                {
                    return nums[i]
                }
            
        }
        else
            map.set(nums[i],1)
    }

    return nums[0]
};

//109ms     beats 60%..  hashmap



