import http from "../http";
import * as url from 'url';

import { apixuConfig } from "../../config"

export default class Apixu {
  public httpClient;

  constructor(httpLib = http) {
    this.httpClient = httpLib;
  }

  public async fetchData(city) {
    const address = this.formatUrl(city);
    const apiData = await this.httpClient(address);
    const weatherData = this.extractData(apiData);
    return weatherData;
  }

  private formatUrl(city) {
    const requestUrl = url.parse(`${apixuConfig.API_URL}?key=${apixuConfig.KEY}&q=${city}`).href;
    return requestUrl;
  }

  private extractData(rawData) {
    const { current } = rawData;
    const formattedData = {
      temperature: current.temp_c,
      windSpeed: current.wind_kph,
      windDegree: current.wind_degree,
      humidity: current.humidity,
      service: "APIXU"
    };
    return formattedData;
  }
}