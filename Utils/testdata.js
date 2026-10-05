import fs from "fs";

export function getTestData(filepath) {
  const data = fs.readFileSync(filepath, utf - 8);
  return JSON.parse(data);
}
