import axios from "axios";
import formatUrl from "./formatUrl";

class GeoLocator {
  private httpClient
  constructor(dependency = axios) {
    this.httpClient = dependency;
  }
  public async getGeoInfo(address) {
    const url = formatUrl(address);
    const result = await this.httpClient.get(url);
    return result.data;
  }
}

export default GeoLocator;