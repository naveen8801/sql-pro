import React from 'react';
import NavBar from '../components/NavBar';
import { makeStyles } from '@material-ui/styles';
import InputLayout from './InputLayout';
import OutputLayout from './OutputLayout';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'space-around',
  },
  leftDiv: {
    width: '48%',
    height: 'calc(100vh - 140px)',
  },
  rightDiv: {
    width: '48%',
    height: 'calc(100vh - 140px)',
  },
}));

function MainLayout() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.leftDiv}>
          <InputLayout />
        </div>
        <div className={classes.rightDiv}>
          <OutputLayout />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
