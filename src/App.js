import './App.css';
import MainLayout from './Layout/MainLayout';
import { useEffect, useState } from 'react';
import raw from './utils/customers.csv';

function App() {
  const [CSVData, setCSVData] = useState([]);

  function csvJSON(raw) {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        const lines = text.toString().split('\n');
        var result = [];
        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split(',');
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj);
        }
        result.pop();
        setCSVData(result);
      });
  }

  useEffect(() => {
    csvJSON(raw);
  }, []);

  return (
    <div className="App">
      <MainLayout CSVData={CSVData} />
    </div>
  );
}

export default App;
