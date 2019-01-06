export function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(l1.val + l2.val);
  result.next = new ListNode(l1.next.val + l2.next.val);

  return result;
};

export default addTwoNumbers;
