import * as URI from 'urijs';
import GeoLocator from "../../src/01";

const createFakeGeoData = (url) => {
  const city = URI.parse(url).path === "/json/" ? "Quezon City" : "Mountain View";
  return { data: { city } };
}

const locator = new GeoLocator({
  // @ts-ignore
  get: (url) => {
    const result = Promise.resolve(createFakeGeoData(url));
    return result
  }
})


describe("test GeoLocator", () => {
  test("defined address", async () => {
    const result = await locator.getGeoInfo("1.1.1.1");
    const expected = { city: 'Mountain View' };
    expect(result).toEqual(expected);
  });

  test("empty address", async () => {
    const result = await locator.getGeoInfo("");
    const expected = { city: 'Quezon City' };
    expect(result).toEqual(expected);
  });
});