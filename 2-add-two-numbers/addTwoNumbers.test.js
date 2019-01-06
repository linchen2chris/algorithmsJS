import addTwoNumbers, { ListNode } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should return correctly", () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);

    const l2 = new ListNode(5);
    l2.next = new ListNode(1);

    const result = new ListNode(7);
    result.next = new ListNode(5);

    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
});
