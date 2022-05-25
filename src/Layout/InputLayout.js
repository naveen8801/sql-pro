import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

function InputLayout() {
  const classes = useStyles();

  return <Card className={classes.root}>InputLayout</Card>;
}

export default InputLayout;
