"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const formatUrl_1 = require("./formatUrl");
exports.default = async (args) => {
    const url = formatUrl_1.default(args);
    try {
        const result = await axios_1.default.get(url);
        return result.data;
    }
    catch (e) {
        return e;
    }
};
//# sourceMappingURL=fetchData.js.map