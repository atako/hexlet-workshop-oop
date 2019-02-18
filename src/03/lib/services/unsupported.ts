// export default async () => {
//   return { error: `This service not supported` }
// }

export default class Unsupported {
  public httpClient;
  constructor(httpLib = "") {
    this.httpClient = httpLib;
  }
  public async fetchData(city) {
    return { error: `This service not supported` }
  }

}