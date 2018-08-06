/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = null;
    while (l1.next !== null && l2.next !== null) {
        // if (l1.val < l2.val) {
        //     if (head === null) head = l1;
        //     let temp = l1.next;
        //     l1.next = l2;
        //     l1 = temp;
        // }
        // else {
        //     if (head === null) head = l2;
        //     let temp = l2.next;
        //     l2.next = l1;
        //     l2 = temp
        // }
        const isL1 = l1.val < l2.val;
        const curr = isL1 ? l1 : l2;
        const next = isL1 ? l2 : l1;
        if (head === null) head = curr;
        let temp = curr.next;
        curr.next = next;
        l1 = temp;
    }
    return head;
};