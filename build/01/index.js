#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_1 = require("./fetchData");
const args = process.argv.splice(2);
fetchData_1.default(args).then(result => console.log(result));
//# sourceMappingURL=index.js.map