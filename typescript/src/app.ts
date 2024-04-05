import fs from 'fs';
import path from 'path';
import { processData } from './process.js';

const directoryPath = path.join(__dirname, '..', '..', 'json_data');
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
    } catch (error) {
      console.error(`Error processing data: ${error}`);
    }
  });
});
