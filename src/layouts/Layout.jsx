import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box mt={'50px'}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
