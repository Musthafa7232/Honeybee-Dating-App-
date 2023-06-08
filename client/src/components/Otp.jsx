import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const Otp = () => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <MuiOtpInput value={otp} onChange={handleChange} />
  )
}

export default Otp