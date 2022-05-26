import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import { getQueryList } from '../utils/QueryList';

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

function InputLayout() {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.flexBox}>
        <FormControl
          variant="outlined"
          style={{ width: '100%', margin: '0.5rem' }}
          size="large"
        >
          <InputLabel>Select a Query</InputLabel>
          <Select
            labelId="Select a Query"
            id="Select a Query"
            value={query}
            label="Select a Query"
            onChange={handleQueryChange}
          >
            {getQueryList().map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.flexBox}></Box>
    </Card>
  );
}

export default InputLayout;
