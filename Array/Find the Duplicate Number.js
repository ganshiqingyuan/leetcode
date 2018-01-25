//https://leetcode.com/problems/find-the-duplicate-number/description/
//2018 1 25
//js bird

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.




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
var findDuplicate = function(nums) {
   var slow=nums[0];
    var fast=nums[0]
    do{
        slow=nums[slow];
        fast=nums[nums[fast]]
    }while(slow!=fast)
        
        var other=nums[0]
        
        while(other!=slow){
            other=nums[other];
            slow=nums[slow]
        }
    return slow
};
//限定条件下，，，最优解法，，，，用到了链表闭环判断，，，，，当然还有先排序的解法



