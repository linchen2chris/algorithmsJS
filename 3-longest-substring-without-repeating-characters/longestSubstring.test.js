import lengthOfLongestSubstring from "./longestSubstring";

describe("longestSubstring.test", () => {
  it("should return correctly", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("")).toEqual(0);
    expect(lengthOfLongestSubstring(" ")).toEqual(1);
    expect(lengthOfLongestSubstring("pxdjrwwui")).toEqual(6);
    expect(lengthOfLongestSubstring("aab")).toEqual(2);
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
});
