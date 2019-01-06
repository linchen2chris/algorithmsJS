export function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let sum = l1.val + l2.val;
  const result = new ListNode(sum % 10);
  let carryFlag = sum > 9 ? true : false;
  sum = l1.next.val + l2.next.val;
  result.next = new ListNode((sum + (carryFlag ? 1 : 0)) % 10);
  carryFlag = sum > 9 ? true : false;
  if (carryFlag) result.next.next = new ListNode(1);
  return result;
};

export default addTwoNumbers;
