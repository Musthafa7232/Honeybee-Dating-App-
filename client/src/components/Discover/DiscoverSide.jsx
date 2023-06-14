import * as React from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import axios from "../../Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { SetUser } from "../../features/RegisterUser/RegisterReducer";
import {useSelector} from 'react-redux'
import { useEffect } from "react";
import { Auth_user } from "../../features/users/AuthReducer";
export default function DiscoverSide() {
 




  return (
    <>
      <Grid
        container
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={11}>
          <Card
            variant="outlined"
            sx={{
              height:'100vh',
              borderRadius: 6,
              backdropFilter: "brightness(0.9) blur(15px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <CardContent>
              <Box
                component="form"
                noValidate
                sx={{
                  my: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
              >    
              <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
              
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
              <Grid >
              
              </Grid>
            </Grid>
             
              
                <Grid container></Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
