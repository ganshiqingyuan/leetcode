//https://leetcode.com/problems/linked-list-cycle/description/
//2018 1 25
//js bird

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head==null){
        return false
    }
    var first=head
    var second=head
    while(second.next&&second.next.next){
        first=first.next;
        second=second.next.next;
        if(first==second){
            return true  
        }
    }
    return false
};

//循环链表，，两个互相跑。。。   122ms



