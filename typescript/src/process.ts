import { Tranform } from "./transform";


export function processData(jsonData: any[]) {
  // Extracts 'value' fields from each record.
  const extractedData = jsonData.map(record => {
    if (!record.attributes || record.attributes.value === undefined) {
      throw new Error('Missing attributes or value field');
    }
    return record.attributes.value;
  });
  return Tranform.transformData(extractedData);
}
