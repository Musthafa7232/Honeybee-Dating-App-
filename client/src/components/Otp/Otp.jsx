import * as React from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { context } from "../../ContextProvider";
import { useContext } from "react";
import axios from "../../Axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Otp() {
  const navigate=useNavigate()
  const [otp, setOtp] = useState('')
const [userDetails,setUserdetails]=useContext(context)
const [loading,setLoading]=useState(false)
  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  useEffect(()=>{
console.log(userDetails.phone);
  },[])

  const handleSubmit = (event) => {
    if(!loading){
      setLoading(true)
          const data={
      otp,
      phone:userDetails.phone
    }
axios.post('/verifyOtp',data).then(res=>{
  if(res.data.success){
    if(res.data.newUser){
      setLoading(false)
      navigate(res.data.redirect)
    }else{
      localStorage.setItem('authorization.user', JSON.stringify(res.data.token))
      setLoading(false)
      navigate(res.data.redirect)
    }
    navigate(res.data.redirect)
  }}).catch(err=>{
    setLoading(false)
    console.log(err);
  })
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
              <MuiOtpInput length={6} value={otp} onChange={handleChange} />
              </Grid>
            </Grid>
             
                <Button
                  variant="outlined"
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










