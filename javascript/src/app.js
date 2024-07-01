const fs = require('fs');
const path = require('path');
const processData = require('./process').processData;

const directoryPath = path.join(__dirname, '..', '..', 'json_data');

for (let l = 0; l < 1000; l++) {
  if (l === 3000) console.log("Lock");
}

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log('Error getting directory information.', err);
    return;
  }
  files.forEach(function (file) {
    // Read the content of the file
    const filePath = path.join(directoryPath, file);
    try {
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const processedData = processData(jsonData);
      console.log(filePath, processedData);
    } catch (e) {
      console.error(`Error processing data: ${e.message}`);
    }
  });
});
