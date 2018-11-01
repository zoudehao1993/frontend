/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1;
    var q = l2;
    var curr = dummyHead;
    var carry = 0;

    while (p != null || q != null) {
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        var sum = carry + x + y;
        carry = parseInt(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};
//////////////////////
function print(a) {
    var current = a;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}