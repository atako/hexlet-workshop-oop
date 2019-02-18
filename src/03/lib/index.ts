import dispatcher from "./dispatcher";

export default class Weather {
  public async getWeather(city, service) {
    const selectedService = dispatcher(service);
    const result = await selectedService.fetchData(city);
    return result;
  }
}