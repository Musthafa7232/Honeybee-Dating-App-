import React from 'react'
import { useEffect } from 'react'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Auth_user } from "../../features/users/AuthReducer";
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
axios.post('/googleLogin',data).then(res=>{
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