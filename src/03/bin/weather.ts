#!/usr/bin/env node
import { argv } from "yargs";
import Weather from "../lib";

const service = argv.service || "";
const city = argv._[0] || "";

(async () => {
  const weather = new Weather();
  const result = await weather.getWeather(city, service)
  console.log(result);
})();
