//https://leetcode.com/problems/single-number/description/
//2018 1 25
//js bird

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     var  result = 0;
    for (var i = 0; i<nums.length; i++)
    {
		result ^=nums[i];
    }
	return result;
};
//异或操作符解决



