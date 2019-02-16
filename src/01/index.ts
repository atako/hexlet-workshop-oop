#!/usr/bin/env node

import fetchData from "./fetchData";


fetchData(process.argv).then(result => console.log(result));



