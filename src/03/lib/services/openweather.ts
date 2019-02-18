import http from "../http";
import * as url from 'url';

import { openweatherConfig } from "../../config"

export default class Openweather {
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
    const requestUrl =
      url.parse(`${openweatherConfig.API_URL}?q=${city}&units=metric&APPID=${openweatherConfig.KEY}`).href;
    return requestUrl;
  }

  private extractData(rawData) {
    const formattedData = {
      temperature: rawData.main.temp,
      windSpeed: rawData.wind.speed,
      windDegree: rawData.wind.deg,
      humidity: rawData.main.humidity,
      service: "OPENWEATHER"
    };
    return formattedData;
  }
}