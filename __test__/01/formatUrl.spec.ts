import formatUrl from "../../src/01/formatUrl";

describe("test url formatter", () => {
  test("defined argument", () => {
    const result = formatUrl(["", "", "1.1.1.1"]);
    const expected = "http://ip-api.com/json/1.1.1.1";
    expect(result).toBe(expected);
  });

  test("empty argument", () => {
    const result = formatUrl(["", ""]);
    const expected = "http://ip-api.com/json/";
    expect(result).toBe(expected);
  });
});