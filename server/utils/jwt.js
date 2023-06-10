import jwt from 'jsonwebtoken';
import { config } from "dotenv"
config()
const createUserToken = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY_USER);
  console.log(token);
  return token;
}

const verifyUserToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY_USER);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send('Invalid Token');
  }
};


export {
  createUserToken,
  verifyUserToken,
};
