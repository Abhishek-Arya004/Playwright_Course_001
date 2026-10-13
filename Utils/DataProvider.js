import fs from "fs";
import XLSX from "xlsx";
import { parse } from "csv-parse/sync";

export function getTestData(source, filepath = null, sheetName = null) {
  switch (source) {
    case "json":
      const data = fs.readFileSync(filepath, "utf-8");
      return JSON.parse(data);
    case "excel":
      const Workbook = XLSX.readFile(filepath);
      const worksheet = Workbook.Sheets[sheetName];

      if (!worksheet) {
        throw new Error(`Sheet ${sheetName} not found in file ${filepath}`);
      }

      return XLSX.utils.sheet_to_json(worksheet, { raw: false });

    case "csv":
      const fileContent = fs.readFileSync(filepath, "utf-8");
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
      });
      return records;
    default:
      throw new Error(`Unsupported data source: ${source}`);
  }
}
