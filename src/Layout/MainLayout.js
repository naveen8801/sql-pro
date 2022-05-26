import React, { useEffect, useState } from 'react';
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
    ['@media (max-width:700px)']: {
      flexDirection: 'column',
    },
  },
  leftDiv: {
    width: '36%',
    height: 'calc(100vh - 140px)',
    ['@media (max-width:700px)']: {
      width: '100%',
      height: '350px',
    },
  },
  rightDiv: {
    width: '60%',
    height: 'calc(100vh - 140px)',
    ['@media (max-width:700px)']: {
      width: '100%',
      height: '450px',
    },
  },
}));

function MainLayout(props) {
  const { CSVData } = props;
  const classes = useStyles();
  const [mainQuery, setMainQuery] = useState({
    isCustomQuery: false,
    query: '',
  });

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.leftDiv}>
          <InputLayout setMainQuery={setMainQuery} />
        </div>
        <div className={classes.rightDiv}>
          <OutputLayout data={CSVData} setMainQuery={mainQuery} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
