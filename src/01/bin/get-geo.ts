#!/usr/bin/env node
import extractIp from "../extractIp";
import GeoLocator from "../geoLocator"

const ip = extractIp(process.argv);

(async () => {
  const locator = new GeoLocator();
  const result = await locator.getGeoInfo(ip)
  console.log(result);
})();
