"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
exports.default = (args) => {
    const address = args[2] || "";
    const url = `${config_1.IP_API_URL}/${address}`;
    return url;
};
//# sourceMappingURL=formatUrl.js.map