import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useEffect } from 'react'
import axios from '../../Axios'
import { useContext } from "react";
import {context} from '../../ContextProvider.jsx'
import { useNavigate } from 'react-router-dom'
function HomePage() {
  const [userDetails,setUserDeatails]=useContext(context)
  const navigate=useNavigate()
  // useEffect(()=>{
  //   axios.get('/userData',{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.user'))}}).then((res)=>{
  //     setUserDeatails(res.data)
  //   })  .catch(error => {
  //     navigate('/login')
  //   })
  // },[])
  return (
    <div>
      <Navbar/>
    <Sidebar/>
    </div>
  )
}

export default HomePage