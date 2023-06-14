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
export default function Otp() {
  const Phone=useSelector(state=>state.phone)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [otp, setOtp] = useState('')
  const [error,setError]=useState(false)
const [loading,setLoading]=useState(false)
  const handleChange = (newValue) => {
    setOtp(newValue)
  }

 useEffect(()=>{
console.log(Phone);
 },[])

 const handleSubmit = (event) => {
  if(otp.length!==6)setError(true)
  else{
    if (!loading) {
    setLoading(true);
    const data = {
      otp,
      phone: Phone.number
    };

    axios.post('/verifyOtp', data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.data.success) {
          if (res.data.newUser) {
            dispatch(SetUser()); // <-- Invoke the action creator function
            navigate(res.data.redirect);
          } else {
            localStorage.setItem('authorization.user', JSON.stringify(res.data.token));
            dispatch(Auth_user);
            navigate(res.data.redirect);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
}

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card
            variant="outlined"
            sx={{
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
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    mb: { xs: 1, sm: 0 },
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                 Enter the OTP
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ textAlign: "center", mb: 3 }}>
                  We have sent an OTP to the phone number you provided
                </Typography>
              </Grid>
              <Grid >
              <MuiOtpInput  {...(error ? { color:'tomato' } : {})}  length={6} value={otp} onChange={handleChange} />
              </Grid>
            </Grid>
             
                <Button
                 variant="outlined"
                 color="warning"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                {!loading?"Continue":"Loading"}  
                </Button>
                <Grid container></Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}










