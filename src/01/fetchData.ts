import axios from "axios";
import formatUrl from "./formatUrl";


export default async (args: string[]) => {
  const url = formatUrl(args);
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    return e
  }
}