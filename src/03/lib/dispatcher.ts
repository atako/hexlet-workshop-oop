import * as _ from "lodash";

import openweatherService from "./services/openweather";
import apixuService from "./services/apixu";
import unsupportedService from "./services/unsupported";


export default (serviceName, httpLib?) => {
  const service = serviceName === "" ? "openweather" : serviceName;
  const services = {
    "openweather": openweatherService,
    "apixu": apixuService
  }
  const SelectedService = _.get(services, service) || unsupportedService;
  return new SelectedService(httpLib);
}