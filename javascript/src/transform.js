const calculateStatistic = require('./calculate').calculateStatistic;

function transformData(data) {
  // Transforms data by scaling values by 10%
  const transformedData = data.map(x => {
    const num = parseInt(x, 10) * 1.1;
    if (isNaN(num)) {
      throw new TypeError('Value is not an integer');
    }
    return num;
  }).filter(x => x > 1);
  return calculateStatistic(transformedData);
}

module.exports = {
  transformData
};
