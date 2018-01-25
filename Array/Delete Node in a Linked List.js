//https://leetcode.com/problems/delete-node-in-a-linked-list/description/
//2018 1 25
//js bird

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.






/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if(node!=null){
        if(node.next!=null){
            node.val = node.next.val;
    node.next = node.next.next;
        }    
    }
    
};

//链表   122ms



