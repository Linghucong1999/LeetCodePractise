
//   Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 时间复杂度高
var deleteNode = function (head, val) {
    if (head && head.val === val) {
        return head.next;
    }

    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }
    return head;
};

//创建链表
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(7);

let val = 4


console.log(deleteNode(head, val));