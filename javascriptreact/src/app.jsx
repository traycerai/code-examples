import React, { useEffect, useState } from 'react';
import { processData } from './process.jsx';

// Mock data fetching function
const fetchJsonData = () => {
  return new Promise((resolve, reject) => {
    try {
      const jsonData = [
        { attributes: { value: 10 } },
        { attributes: { value: 20 } },
        { attributes: { value: 30 } }
      ];
      resolve(jsonData);
    } catch (e) {
      reject(e);
    }
  });
};

const App = () => {
  const [data, setData] = useState({ original: [], average: null });

  useEffect(() => {
    // Fetching mock data
    fetchJsonData().then((jsonData) => {
      try {
        const processedData = processData(jsonData);
        const originalData = jsonData.map(record => record.attributes.value);
        setData({ original: originalData, average: processedData });
      } catch (e) {
        console.error(`Error processing data: ${e.message}`);
      }
    });
  }, []);

  // Bad Practice: Inline function in render
  const renderData = () => {
    if (data.average === null) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h2>
          Average of {data.original.join(', ')} is {data.average}
        </h2>
      </div>
    );
  };

  return (
    <div>
      <h1>Data Processing App</h1>
      {renderData()}
    </div>
  );
};

export default App;
