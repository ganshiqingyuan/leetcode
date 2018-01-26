//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
//2018 1 26
//js bird

Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var map=new Map()
    for(var i=0;i<nums.length;i++){
        if(map.get(nums[i])){
            if(map.get(nums[i])>1){
                    nums.splice(i,1);
                    i--;

               }
            else
            map.set(nums[i],2)
        }
        else
             map.set(nums[i],1)
    }
    return nums.length
};
//hasemap  beats 50%



