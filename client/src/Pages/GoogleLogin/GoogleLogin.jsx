import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Auth_user } from "../../features/users/AuthReducer";
import { googleLoginApi } from '../../services/api';
function GoogleLogin() {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    useEffect(()=>{
console.log(email)
const data={
    email
}
googleLoginApi(data).then(res=>{
    console.log(res);
    if(res.data.success){
        localStorage.setItem(
            "authorization.user",
            JSON.stringify(res.data.token)
          );
          dispatch(Auth_user());
          navigate(res.data.redirect);
    }else{
navigate('/')
    }
})
    },[])
  return (
    <div>
        
    </div>
  )
}

export default GoogleLogin