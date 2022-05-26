import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Tabs, Tab, Box } from '@material-ui/core';

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
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function OutputLayout() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState('Results');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case `Results`:
        return <>Results</>;
      case `Default Data`:
        return <>Default Data</>;
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
