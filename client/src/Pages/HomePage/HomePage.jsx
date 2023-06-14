import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Discover from '../../components/Discover/DiscoverSide';

function HomePage() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs>
        <Sidebar />
      </Grid>
  
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Discover />
        </Grid>
      </Grid>
  );
}

export default HomePage;
