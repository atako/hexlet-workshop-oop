import axios from "axios";
import formatUrl from "./formatUrl";

class Data {

  public async get(ip) {
    const url = formatUrl(ip);
    const result = await axios.get(url);
    return result.data;
  }
}

export default Data;