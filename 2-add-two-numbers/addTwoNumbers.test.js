import addTwoNumbers, { ListNode, defineList } from "./addTwoNumbers";

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
  it("should return correct when has carry", () => {
    const l1 = defineList([9, 9]);
    const l2 = defineList([9, 9]);

    const result = defineList([8, 9, 1]);
    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
  it("should return correct when has carry and l1 is longer", () => {
    const l1 = defineList([9, 9, 2, 4]);
    const l2 = defineList([9, 9]);

    const result = defineList([8, 9, 3, 4]);
    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
  it("should return correct when has carry and l2 is longer", () => {
    const l1 = defineList([9, 9]);
    const l2 = defineList([9, 9, 3, 4]);

    const result = defineList([8, 9, 4, 4]);
    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
  it("bug fix, fail case in leetscode", () => {
    const l1 = defineList([1]);
    const l2 = defineList([9, 9]);

    const result = defineList([0, 0, 1]);
    expect(addTwoNumbers(l1, l2)).toEqual(result);
  });
});
