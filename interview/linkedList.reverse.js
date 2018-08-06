/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return head;
    let prev = head;
    let node = head.next;
    head.next = null;
    while (node !== null) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};