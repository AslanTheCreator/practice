import { Typography, Grid } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Grid container height={'70vh'} justifyContent={'center'} alignItems={'center'}>
      <Grid>
        <Typography variant="h1">Welcome to news portal</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
