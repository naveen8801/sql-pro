import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Tabs, Tab, Box } from '@material-ui/core';
import TableView from '../components/TableView';

const tabContent = [
  {
    value: 'Results',
    label: 'Results',
  },
  {
    value: 'Default Data',
    label: 'Default Data',
  },
  {
    value: 'Download',
    label: 'Download',
  },
];

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function OutputLayout(props) {
  const classes = useStyles();
  const { data, setMainQuery } = props;
  const [tabValue, setTabValue] = useState('Results');
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    calculateQueryResults();
  }, [setMainQuery]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const calculateQueryResults = () => {
    var n = 0;
    if (setMainQuery.isCustomQuery) {
      n = 10;
    } else {
      n = Math.floor(Math.random() * 9);
    }
    var shuffled = data.sort(function () {
      return 0.5 - Math.random();
    });
    var result = shuffled.slice(0, n);
    setResultData(result);
  };
  
  const renderTabContent = () => {
    switch (tabValue) {
      case `Results`:
        return (
          <Box
            style={{
              width: '95%',
            }}
          >
            <TableView setMainQuery={setMainQuery} rows={resultData} />
          </Box>
        );
      case `Default Data`:
        return (
          <Box
            style={{
              width: '95%',
            }}
          >
            <TableView rows={data} />
          </Box>
        );
      case `Download`:
        return <>Download</>;
      default:
        return '';
    }
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.flexBox}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="ant example"
          centered
          style={{ width: '100%', margin: '0.5rem' }}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabContent.map((item, index) => {
            return <Tab key={index} value={item.value} label={item.label} />;
          })}
        </Tabs>
      </Box>
      <Box className={classes.flexBox}>{renderTabContent()}</Box>
    </Card>
  );
}

export default OutputLayout;
