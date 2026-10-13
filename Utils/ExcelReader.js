import XLSX from "xlsx";

export function readExcelFile(filepath, sheetName) {
  const Workbook = XLSX.readFile(filepath);
  const worksheet = Workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error(`Sheet ${sheetName} not found in file ${filepath}`);
  }

  return XLSX.utils.sheet_to_json(worksheet, { raw: false });
}
