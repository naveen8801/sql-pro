import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
} from '@material-ui/core';
import { getQueryList } from '../utils/QueryList';

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
    flexWrap: 'nowrap',
  },
  textArea: {
    width: '100%',
    margin: '0.5rem',
    backgroundColor: 'black',
    border: '2px solid black',
    borderRadius: '8px',
  },
}));

function InputLayout(props) {
  const { setMainQuery } = props;
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [customQuery, setCustomQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSendButton = (e) => {
    e.preventDefault();
    setMainQuery({
      isCustomQuery: query === 'Custom Query',
      query: query === 'Custom Query' ? customQuery : query,
    });
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
      <Box className={classes.flexBox}>
        <TextField
          className={classes.textArea}
          placeholder="Select query or Type you query here"
          multiline
          rows={8}
          maxRows={10}
          value={query !== 'Custom Query' ? query : customQuery}
          onChange={(e) => setCustomQuery(e.target.value)}
          inputProps={{
            min: 0,
            style: {
              color: 'white',
              padding: '0.5rem',
              fontFamily: 'Source Code Pro',
              fontSize: '14px',
            },
          }}
          disabled={query !== 'Custom Query'}
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: '1rem',
        }}
      >
        <Button
          style={{ backgroundColor: '#354259', color: 'white' }}
          onClick={(e) => handleSendButton(e)}
        >
          Send
        </Button>
      </Box>
    </Card>
  );
}

export default InputLayout;
