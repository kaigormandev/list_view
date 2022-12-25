import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestDetail } from '../action';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Detail = () => {
  const {id} = useParams();

  const { detailData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect( () => {
     dispatch(requestDetail());
   
  }, [])

  const data = detailData.find(item => item.dbn === id); 

  if(data) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>dbn</TableCell>
              <TableCell align="right">school_name</TableCell>
              <TableCell align="right">num_of_sat_test_takers</TableCell>
              <TableCell align="right">sat_critical_reading_avg_score</TableCell>
              <TableCell align="right">sat_math_avg_score</TableCell>
              <TableCell align="right">sat_writing_avg_score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right">{data.dbn}</TableCell>
            <TableCell align="right">{data.school_name}</TableCell>
            <TableCell align="right">{data.num_of_sat_test_takers}</TableCell>
            <TableCell align="right">{data.sat_critical_reading_avg_score}</TableCell>
            <TableCell align="right">{data.sat_math_avg_score}</TableCell>
            <TableCell align="right">{data.sat_writing_avg_score}</TableCell>
          </TableRow>  }
          
          </TableBody>
        </Table>
      </TableContainer>
    )
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>dbn</TableCell>
              <TableCell align="right">school_name</TableCell>
              <TableCell align="right">num_of_sat_test_takers</TableCell>
              <TableCell align="right">sat_critical_reading_avg_score</TableCell>
              <TableCell align="right">sat_math_avg_score</TableCell>
              <TableCell align="right">sat_writing_avg_score</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    )
  }

}


export default Detail;