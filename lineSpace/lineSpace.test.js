import lineSpace from "./lineSpace";

describe("calc correctl", () => {
  it("should return 4 when p = 2 and n = 2", () => {
    expect(lineSpace(2, 2)).toBe(4);
  });
});
