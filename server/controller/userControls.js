import userModel from "../model/userModel.js";
import { sendOtp, checkOtp } from "../utils/Twilio.js";
import { createUserToken } from "../utils/jwt.js";
import {
  createNewUser,
  findUserWithPhone,
  findUserWithEmail,
} from "../Helper/dbHelper.js";
import { getGoogleOauthToken, getGoogleUser } from "../Helper/GoogleHelper.js";

export const userDetails = async (req, res) => {
  console.log(req.body);
  const user = await createNewUser(req.body);
  if (user) {
    const token = createUserToken(user);
    console.log(token);
    res.json({ success: true, redirect: "/home", user, token }).status(200);
  }
};

export const phoneOtp = async (req, res) => {
  const phone = req.body.phone;
  console.log(req.body);
  try {
    await sendOtp(phone);
    res.json({ success: true }).status(200);
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "some error occured" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    console.log(req.body);
    const { otp, phone } = req.body;
    const checking = await checkOtp(otp, phone);
    console.log(checking.status);
    if (checking.status === "approved") {
      const user = await findUserWithPhone(phone);

      if (!user) {
        res.json({
          success: true,
          newUser: true,
          redirect: "/createAccount",
        });
      } else {
        const token = createUserToken(user);

        res.json({ success: true, token, redirect: "/home" });
      }
    } else {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "some error occured" });
  }
};

export const userData = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(400).send("user not found");
  }
};

export const googleData = async (req, res) => {
  try {
    const code = req.query.code;

    if (!code) {
      return next(new AppError("Authorization code not provided!", 401));
    }

    const { id_token, access_token } = await getGoogleOauthToken({ code });

    const { name, verified_email, email } = await getGoogleUser({
      id_token,
      access_token,
    });

    if (!verified_email) {
      return next(new AppError("Google account not verified", 403));
    }

    const user = await findUserWithEmail(email);
console.log(name);
    if (user) {
      res.redirect(`http://localhost:5173/googleLogin?email=${email}`);
    } else {
      res.redirect(`http://localhost:5173/login?fullName=${name}&email=${email}`);
    }
  } catch (err) {
    console.log("Failed to authorize Google User", err);
    return res.redirect(`${config.get('origin')}/oauth/error`);
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findUserWithEmail(email);
    if (user) {
      const token = createUserToken(user);
      res.json({ success: true, token, redirect: "/home" });
    }
  } catch (err) {
    console.log(err);
  }
};
