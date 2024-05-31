import { calculateStatistic } from './calculate';

export function transformData(data: number[]): number {
  const transformedData = data.map(x => {
    const num = parseInt(x.toString(), 10) * 1.1;
    if (isNaN(num)) {
      throw new TypeError('Value is not an integer');
    }
    return num;
  }).filter(x => x > 1);
  return calculateStatistic(transformedData);
}
