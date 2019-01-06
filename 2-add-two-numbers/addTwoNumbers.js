export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export const defineList = numbers => {
  const nodes = [];
  nodes[0] = new ListNode(numbers[0]);
  for (var i = 1; i < numbers.length; i++) {
    nodes[i] = new ListNode(numbers[i]);
    nodes[i - 1].next = nodes[i];
  }
  return nodes[0];
};

const addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let carryFlag = false;
  let result = [];

  while (l1 || l2) {
    const lv1 = l1 ? l1.val : 0;
    const lv2 = l2 ? l2.val : 0;
    sum = lv1 + lv2 + (carryFlag ? 1 : 0);
    carryFlag = sum > 9;
    result.push(carryFlag ? sum - 10 : sum);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carryFlag) {
    result.push(1);
  }
  return defineList(result);
};

export default addTwoNumbers;
