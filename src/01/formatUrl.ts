import { IP_API_URL } from "./config"
import * as url from 'url';

export default (address: string): string => {
  const requestUrl =
    url.parse(`${IP_API_URL}/${address}`).href;
  return requestUrl;
}

