import React from 'react'
import { MuiTelInput,matchIsValidTel } from 'mui-tel-input'
import Typography from "@mui/material/Typography";
import "@fontsource/Roboto" 
 const Phone = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (newValue) => {
    console.log(matchIsValidTel(newValue));
    matchIsValidTel(newValue)
    setValue(newValue)
  }

  return(   <> 
   <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      mb:1,
      fontFamily: 'Roboto',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
   Enter Your Phone Number
  </Typography>
 < Typography sx={{mb:3}}>
 We will sent an otp to this phone number
 </Typography>
  <MuiTelInput defaultCountry='IN' variant="standard" value={value} onChange={handleChange} />
 </>)
}

export default Phone