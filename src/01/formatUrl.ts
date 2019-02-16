import { IP_API_URL } from "./config"

export default (args: string[]) => {
  const address = args[2] || "";
  const url = `${IP_API_URL}/${address}`;
  return url;
}

