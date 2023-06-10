import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Phone from "../PhoneNumber/Phone";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../Axios";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import {context} from '../../ContextProvider.jsx'
export default function Login() {
  const [phone, setphone] = useState();
  const [userDetails,setUserDeatails]=useContext(context)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
console.log(userDetails);
  },[userDetails])
  useEffect(()=>{
console.log(phone)
  },[phone])
  const handleSubmit = (event) => {
    if(!loading){
      setLoading(true) 
      const data = {
      phone,
    }
    axios
      .post("/phone", data)
      .then((res) => {
        if(res.data.success){
          setLoading(false)
          setUserDeatails({phone})
          navigate('/otp')
        }
        
      })
      .catch((err) =>{
        setLoading(false)
         console.log(err)
        })
    }
  }
  const addPhone = (number) => {
    setphone(number);
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
                <Phone changePhone={addPhone} />
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
