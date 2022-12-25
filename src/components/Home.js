import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestLists } from '../action';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Detail from './Detail';
import { Link } from 'react-router-dom';

function Home() {
  const { schData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestLists());  
  }, [])

  console.log("schData", schData)

  const handleClick = event => {
    console.log('click');
  };

  return (
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    }}>
        {schData.length > 0 && (
        <ul> 
            {schData.map(list => (
            <li key={list.dbn}>
                <Card sx={{width: 500, 
                height: 200, 
                minWidth: 275, 
                marginTop: 2, 
                marginBottom: 2, 
                backgroundColor: '#f9f9f9',
                list0style: 'none'}}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                    {list.school_name}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {list.phone_number}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {list.website}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link onClick={handleClick} to={`/detail/${list.dbn}`}>
                        <Button size="small">detail view</Button>
                    </Link>
                </CardActions>
                </Card>
            </li>
            ))}
        </ul>
        )}
    </div>   
  );
}

export default Home;
