import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { makeStyles } from '@material-ui/styles';
import InputLayout from './InputLayout';
import OutputLayout from './OutputLayout';
import raw from './../utils/customers.csv';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'space-around',
  },
  leftDiv: {
    width: '40%',
    height: 'calc(100vh - 140px)',
  },
  rightDiv: {
    width: '56%',
    height: 'calc(100vh - 140px)',
  },
}));

function MainLayout() {
  const classes = useStyles();
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
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.leftDiv}>
          <InputLayout />
        </div>
        <div className={classes.rightDiv}>
          <OutputLayout data={csvJSON} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
