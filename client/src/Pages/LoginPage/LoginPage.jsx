import React from 'react'
import Login from '../../components/Login/Login'
import Navbar from '../../components/Navbar/Navbar'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import bgSvg from '/blob.svg'
function LoginPage() {
  const navigate=useNavigate()
  useEffect(()=>{
    document.body.style.backgroundColor = "none";
    document.body.style.backgroundImage = `url(${bgSvg})`;
  },[])
  return (
    <div>
      <Navbar/>
        <Login/>
    </div>
  )
}

export default LoginPage