import pipeline from "../../src/02";

describe("test pipeline", () => {
  const result = pipeline();
  expect(result).toEqual(["SRCS"]);
});

