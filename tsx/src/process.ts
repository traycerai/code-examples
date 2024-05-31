import { transformData } from './transform';

export function processData(jsonData: any[]): number {
  const extractedData = jsonData.map(record => {
    if (!record.attributes || record.attributes.value === undefined) {
      throw new Error('Missing attributes or value field');
    }
    return record.attributes.value;
  });
  return transformData(extractedData);
}
