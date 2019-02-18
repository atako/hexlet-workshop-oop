import Weather from "../../src/03/lib";

describe("test weather lib", () => {
  const weather = new Weather();
  test("openweather", async () => {
    const lib = new Weather();
    const result = await lib.getWeather("berlin", "apixu");
  });

});