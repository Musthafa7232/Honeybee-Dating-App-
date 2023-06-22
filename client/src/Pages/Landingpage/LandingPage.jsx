import React from 'react'
import Landing from '../../components/Landing page/Landing'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from '../../components/logo/logo'
import {Zoom} from '@mui/material';
function LandingPage() {
  const [initial,setInitial]=useState(true)

  useEffect(()=>{
setTimeout(()=>{
setInitial(false)
},5000)
  },[])
  return (
    <div>
      {initial?<Logo/>: <Landing/>}
       
    </div>
  )
}

export default LandingPage



