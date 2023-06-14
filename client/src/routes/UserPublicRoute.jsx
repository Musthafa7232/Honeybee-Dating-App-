import React from "react";
import {useSelector} from 'react-redux'
import {Outlet,Navigate} from 'react-router-dom'


const UserPublicRoute=()=> {
    const authState=useSelector(state=>state.auth)
    console.log(authState);
  return (
    authState.auth?<Navigate to='/home'/>:<Outlet/>
  )
}

export default UserPublicRoute