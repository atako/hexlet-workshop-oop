#!/usr/bin/env node
import fetchData from "../fetchData"

const lib = new fetchData();
lib.get(process.argv).then(result => console.log(result));
