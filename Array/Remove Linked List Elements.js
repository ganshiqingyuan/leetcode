//https://leetcode.com/problems/remove-linked-list-elements/description/
//2018 1 25
//js bird

Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head==null){
        return []
    }
    while(head!=null&&head.val==val){
        head=head.next
    }
    if(head==null){
        return []
    }
    var result=head
    while(head.next!=null){
        if(head.next.val==val){
            head.next=head.next.next;
            
        }
        else
            head=head.next
    }
    return result
};

//链表   120ms



