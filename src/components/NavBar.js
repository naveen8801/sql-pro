import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((menueVisible) => ({
  root: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#354259',
    fontSize: '30px',
    fontWeight: '800',
    margin: '2rem',
  },
  subtext: { color: '#354259', fontWeight: '600', margin: '2rem' },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>SQL-Pro</h2>
      <h3 className={classes.subtext}>Welcome User</h3>
    </div>
  );
}

export default NavBar;
