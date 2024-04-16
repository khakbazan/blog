import fs from "fs";

export const readFile = <T>(path: string): T => {
  return JSON.parse(fs.readFileSync(path).toString());
};
