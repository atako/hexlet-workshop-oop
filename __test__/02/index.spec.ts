import pipeline from "../../src/02";

describe("test pipeline", () => {
  test("", () => {
    const result = pipeline();
    expect(result).toEqual(["SRCS"]);
  });
});

