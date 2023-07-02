import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const createUserToken = (user) => {
  if (user.id && user.name) {
    const payload = {
      id: user._id,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY_USER);
    console.log(token);
    return token;
  } else {
    throw new Error("invalid user");
  }
};

export const verifyUserToken = (token,req) => {
  const verified = jwt.verify(token, process.env.SECRET_KEY_USER);
  if (verified) {
    console.log('hi');
   req.user = verified;;
return true
  } else {
    throw new Error("invalid Token");
  }
};
