import {configureStore,createSlice} from '@reduxjs/toolkit'

import AuthReducer from '../features/users/AuthReducer'
import RegisterReducer from '../features/RegisterUser/RegisterReducer.js'
import PhoneReducer from '../features/users/PhoneReducer.js'
import UserReducer from '../features/users/UserReducer.js'
import GoogleReducer from '../features/users/GoogleReducer'

const store=configureStore({
    reducer:{
        auth:AuthReducer,
        register:RegisterReducer,
        phone:PhoneReducer,
        user:UserReducer,
        google:GoogleReducer
    }
})

export default store