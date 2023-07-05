import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MatchSide from '../../components/Matches/MatchSide';

function MatchesPage() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs sx={{display:{xs:'none',lg:'block'}}}>
        <Sidebar />
      </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <MatchSide />
        </Grid>
      </Grid>
  )
}

export default MatchesPage