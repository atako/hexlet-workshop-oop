import * as fs from "fs";
import * as R from "ramda";
import * as _ from "lodash";

const isFirstSymbol =
  (files: string[], symbol: string) =>
    files.filter(file => _.startsWith(file, symbol));

const uppercase =
  (files: string[]): string[] =>
    files.map(file => file.toUpperCase());

const plural =
  (files: string[], symbol: string): string[] =>
    files.map(file => `${file}${symbol}`);

export default () => {
  const files = fs.readdirSync("./");
  const result = R.pipe(
    x => isFirstSymbol(x, "s"),
    x => plural(x, "s"),
    uppercase
  )(files);
  return result;
}