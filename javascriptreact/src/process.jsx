import { transformData } from './transform.jsx';

export function processData(jsonData) {
  const extractedData = jsonData.map(record => {
    if (!record.attributes || record.attributes.value === undefined) {
      throw new Error('Missing attributes or value field');
    }
    return record.attributes.value;
  });
  return transformData(extractedData);
}
