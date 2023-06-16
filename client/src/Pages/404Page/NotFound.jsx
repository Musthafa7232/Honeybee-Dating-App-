import React from 'react'
import goHomeSvg from '/Go Home , You’re Drunk!.svg'
import goHomeimg from '/Group 2.svg'
import { Grid,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
function NotFound() {
    const Navigate=useNavigate()
  return (
    <Grid container style={{display:'flex',justifyContent:'center',height:'100vh'}}>
        <Grid >
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_4qhciwpm.json"  background="transparent"  speed="1"  style={{width: '40rem', height: '40rem'}}  loop  autoplay></lottie-player>
<Button onClick={()=>{Navigate('/')}}  fullWidth  variant="outlined"
                  color="warning">
        Go back
    </Button>  
        </Grid>

    </Grid>
  )
}

export default NotFound