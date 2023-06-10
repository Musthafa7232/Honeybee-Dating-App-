import React from 'react'
import Login from '../../components/Login/Login'
import Navbar from '../../components/Navbar/Navbar'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function LoginPage() {
  const navigate=useNavigate()
  // useEffect(()=>{
  //   axios.get('/userData',{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.user'))}}).then((res)=>{
  //     navigate('/home')
  //   })  .catch(error => {
      
  //   })
  // },[])
  return (
    <div>
      <Navbar/>
        <Login/>
    </div>
  )
}

export default LoginPage