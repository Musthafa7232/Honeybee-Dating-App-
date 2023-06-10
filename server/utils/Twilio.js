import { config } from "dotenv"
config()
const accountSid =process.env.ACCOUNT
const authToken = process.env.TOKEN;
const verifySid = process.env.VERIFY;
import twilio from "twilio";

const client = twilio(accountSid, authToken);

// Now you can use the client object for Twilio API operations



  export const sendOtp=(number)=> {
      client.verify.v2
            .services(verifySid)
            .verifications.create({ to: `${number}`, channel: "sms" })
    }
 
  export const  checkOtp= async (otpCode,number) => {
        try{
  const status = await client.verify.v2
            .services(verifySid).verificationChecks.create({ to: `${number}`, code: otpCode });
             return status
        }catch(err){
            console.log(err);
        }   
    }

