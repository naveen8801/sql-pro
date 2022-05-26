import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflow: 'auto',
    height: 'calc(100vh - 250px)',
    minHeight: '250px',
    margin: '0.5rem',
  },
}));

function TableView(props) {
  const { rows, setMainQuery } = props;
  const classes = useStyles();
  return (
    <>
      {setMainQuery && setMainQuery.query.trim() === '' ? (
        <i>
          Please select a query from dropdown or select Custom Query and write
          your own query
        </i>
      ) : (
        <TableContainer className={classes.root}>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>customerID</strong>
              </TableCell>
              <TableCell align="right">
                <strong>companyName</strong>
              </TableCell>
              <TableCell align="right">
                <strong>contactName</strong>
              </TableCell>
              <TableCell align="right">
                <strong>contactTitle</strong>
              </TableCell>
              <TableCell align="right">
                <strong>address</strong>
              </TableCell>
              <TableCell align="right">
                <strong>city</strong>
              </TableCell>
              <TableCell align="right">
                <strong>region</strong>
              </TableCell>
              <TableCell align="right">
                <strong>postalCode</strong>
              </TableCell>
              <TableCell align="right">
                <strong>country</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.customerID}
                  </TableCell>
                  <TableCell align="right">{row.companyName}</TableCell>
                  <TableCell align="right">{row.companyName}</TableCell>
                  <TableCell align="right">{row.contactName}</TableCell>
                  <TableCell align="right">{row.contactTitle}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.region}</TableCell>
                  <TableCell align="right">{row.postalCode}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableContainer>
      )}
    </>
  );
}

export default TableView;
