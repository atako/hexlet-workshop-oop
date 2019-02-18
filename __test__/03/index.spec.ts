import * as _ from "lodash";
import * as url from "url";
import Weather from "../../src/03/lib";

describe("test weather lib", () => {
  const lib = new Weather();

  const fakeHttpClient = (addr) => {
    const address = url.parse(addr);
    const apiHostname = address.hostname;
    const responses = {
      "api.apixu.com": {
        "current": {
          "temp_c": 14,
          "wind_kph": 16.9,
          "wind_degree": 200,
          "humidity": 51,
        }
      },
      "api.openweathermap.org": {
        "main": {
          "temp": 21,
          "humidity": 74,
        },
        "wind": {
          "speed": 6.2,
          "deg": 100
        }
      }
    }
    const response = _.get(responses, apiHostname);
    const result = Promise.resolve(response);
    return result
  }

  test("openweather", async () => {
    const result = await lib.getWeather("singapore", "openweather", fakeHttpClient);
    expect(result).toEqual({
      temperature: 21,
      windSpeed: 6.2,
      windDegree: 100,
      humidity: 74,
      service: 'OPENWEATHER'
    })
  });

  test("apixu", async () => {
    const result = await lib.getWeather("singapore", "apixu", fakeHttpClient);
    expect(result).toEqual({
      temperature: 14,
      windSpeed: 16.9,
      windDegree: 200,
      humidity: 51,
      service: 'APIXU'
    })
  });

  test("nonexisting", async () => {
    const result = await lib.getWeather("singapore", "notsupported");
    expect(result).toEqual({ error: "This service not supported" })
  });

  test("service not defined", async () => {
    const result = await lib.getWeather("singapore", "", fakeHttpClient);
    expect(result).toEqual({
      temperature: 21,
      windSpeed: 6.2,
      windDegree: 100,
      humidity: 74,
      service: 'OPENWEATHER'
    })
  });
});