import * as _ from "lodash";

import openweatherService from "./services/openweather";
import apixuService from "./services/apixu";
import unsupportedService from "./services/unsupported";

const defaultService = "openweather";

export default (serviceName = defaultService, httpLib?) => {
  const services = {
    "openweather": openweatherService,
    "apixu": apixuService
  }
  const SelectedService = _.get(services, serviceName) || unsupportedService;
  return new SelectedService(httpLib);
}