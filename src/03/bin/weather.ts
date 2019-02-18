#!/usr/bin/env node
import { argv } from "yargs";
import Weather from "../lib";


const service = argv.service || "";
const city = argv._[0] || "";

// const ip = extractIp(process.argv);

(async () => {
  const weather = new Weather();
  const result = await weather.getWeather(service, city)
  console.log(result);
})();
