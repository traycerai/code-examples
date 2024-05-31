export function calculateStatistic(data) {
  if (data.length === 0) {
    throw new Error('Division by zero error - data is empty');
  }
  const sum = data.reduce((acc, val) => acc + val, 0);
  return sum / data.length;
}
