import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import {context} from '../../ContextProvider.jsx'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom';
export default function InitialData() {
  const [userData,setUserData]=useState({ fullName:'',
     email:'',
     birthday:null,
      age:null,
       gender:'',
        location:'',
        phone:'',
        Preference:'' })
  const [loading,setloading]=useState(false)
  const [userDetails,setUserDeatails]=useContext(context)
  const navigate=useNavigate()
  useEffect(()=>{
    console.log(userDetails.phone);
    setUserData((prevState) => ({
      ...prevState,
     phone:userDetails.phone
    }));
  },[])

  useEffect(()=>{
console.log(userData);

  },[userData])
  const handleSubmit = (event) => {
   if(!loading){
    setloading(true)
    axios.post('/createAccount',userData).then(res=>{
      if(res.data.success){
        console.log(res);
         setloading(false)
         setUserDeatails(res.data.user)
        navigate(res.data.redirect)
      }
    }).catch(err=>{
      setloading(false)
      console.log(err)
    })
   }
  };

  const locationSelector = () => {
    if (navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  
        fetch(geoApiUrl)
          .then(res => res.json())
          .then(data => {
            console.log(data.city + ',' + data.principalSubdivision);
            setUserData((prevState) => ({
              ...prevState,
              location: data.city + ',' + data.principalSubdivision
            }));
          });
      }, (error) => {
        console.log(error);
        // Handle the error or prompt the user to allow location access again
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  

const dateToAge=(data)=>{
  const selectedDate = new Date(data.$d);
const currentDate = new Date();

const ageDiff = currentDate.getTime() - selectedDate.getTime();
const ageDate = new Date(ageDiff);

const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
console.log(data.$d);
setUserData((prevState) => ({
  ...prevState,
  birthday: data.$d,
  age:calculatedAge
}) )
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
               <Typography
        
          sx={{
            my: { xs: 3, sm: 3 },
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
                    Introduce Yourself
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  <TextField
  label="Full Name"
  variant="outlined"
  fullWidth
  onChange={(e) =>
    setUserData((prevState) => ({
      ...prevState,
      fullName: e.target.value
    }))
  }
/>

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      onChange={(e) =>
                        setUserData((prevState) => ({
                          ...prevState,
                          email: e.target.value
                        }))
                      }
                    />
                  </Grid>
                  <Grid item xs={12}  sm={12}>
                  <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker  label="Birthday"   value={userData.birthday}
      onChange={dateToAge} />
      </DemoContainer>
    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Typography>Gender</Typography>
                  <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: 'row',
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '3px solid',
            borderColor: 'primary.500',
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            bgcolor: 'background.body',
            borderRadius: '50%',
          },
        },
      }}
    >
      {['Male', 'Female', 'Other'].map((value) => (
        <Sheet
          key={value}
          variant="outlined"
          sx={{
            borderRadius: 'md',
            bgcolor: 'background.body',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign:'center',
            p: 1,
            minWidth: 80,
          }}
        >
          <Radio id={value} value={value} onClick={() => setUserData((prevState) => ({ ...prevState, gender: value }))} checkedIcon={<CheckCircleRoundedIcon />} />
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{alignContent:'end'}}>
                    <Typography>Show Me</Typography>
                  <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: 'row',
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '3px solid',
            borderColor: 'primary.500',
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            bgcolor: 'background.body',
            borderRadius: '50%',
          },
        },
      }}
    >
      {['Male', 'Female', 'Everyone'].map((value) => (
        <Sheet
          key={value}
          variant="outlined"
          sx={{
            borderRadius: 'md',
            bgcolor: 'background.body',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign:'center',
            p: 1,
            minWidth: 80,
          }}
        >
                 
    
          <Radio id={value} value={value}  onClick={() => setUserData((prevState) => ({ ...prevState, Preference: value }))} checkedIcon={<CheckCircleRoundedIcon />} />
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Button sx={{mt:2}} size="large" fullWidth onClick={locationSelector} variant="outlined" startIcon={ <LocationOnIcon/>}>
  {userData.location?userData.location:'Location'}
</Button>
                  </Grid>
                </Grid>

                <Button
                  variant="filled"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  {loading?'Loading':'Continue'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
