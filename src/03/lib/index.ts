import dispatcher from "./dispatcher";
import { httpify } from "caseless";

export default class Weather {
  public async getWeather(city, service, httpClient?) {
    const selectedService = dispatcher(service, httpClient);
    const result = await selectedService.fetchData(city);
    return result;
  }
}