export const userDetails =
  (createNewUser, createJwtToken, userModel, createUserToken) =>
  async (req, res) => {
    try {
      const user = await createNewUser(req.body, userModel);
      const token = await createJwtToken(user, createUserToken);
      res.status(200).json({ success: true, redirect: "/home", user, token });
    } catch (error) {
      res.status(400).json({ error: "Failed to create user" });
    }
  };

export const phoneOtp = (SendPhoneOtp, sendOtp) => async (req, res) => {
  const { phone } = req.body;
  try {
    await SendPhoneOtp(phone, sendOtp);
    res.json({ success: true }).status(200);
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Some error occurred" });
  }
};

export const verifyOtp =
  (
    VerifyPhoneOtp,
    checkOtp,
    userModel,
    findUserWithPhone,
    createJwtToken,
    createUserToken
  ) =>
  async (req, res) => {
    const { otp, phone } = req.body;
    try {
      const verificationStatus = await VerifyPhoneOtp(otp, phone, checkOtp);
      if (verificationStatus.status === "approved") {
        const user = await findUserWithPhone(phone, userModel);
        if (!user) {
          res.json({
            success: true,
            newUser: true,
            redirect: "/createAccount",
          });
        } else {
          const token = await createJwtToken(user, createUserToken);
          res.json({ success: true, token, redirect: "/home" });
        }
      } else {
        throw new Error("Failed to verify OTP");
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Some error occurred" });
    }
  };

  export const userData =
  (VerifyJwtToken, verifyUserToken, findUserWithId, userModel) =>
  async (req, res) => {
    console.log('hi');
    try {
      await VerifyJwtToken(req, verifyUserToken);
      const user = await findUserWithId(req.user.id, userModel);
      console.log(user);
      res.json(user).status(200);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

export const googleData =
  (userModel, findUserWithEmail, getGoogleOauthToken, getGoogleUser) =>
  async (req, res) => {
    try {
      const { code } = req.query;
      if (!code) {
        throw new Error("Authorization code not provided");
      }
      const { id_token, access_token } = await getGoogleOauthToken(code);
      const { name, verified_email, email } = await getGoogleUser(
        id_token,
        access_token
      );
      if (!verified_email) {
        throw new Error("Google account not verified");
      }
      const user = await findUserWithEmail(email, userModel);
      if (user) {
        res.redirect(`http://localhost:5173/googleLogin?email=${email}`);
      } else {
        res.redirect(
          `http://localhost:5173/login?fullName=${name}&email=${email}`
        );
      }
    } catch (error) {
      console.error("Failed to authorize Google User", error);
      res.redirect(`${config.get("origin")}/oauth/error`);
    }
  };

export const googleLogin =
  (findUserWithEmail, userModel, createUserToken, createJwtToken) =>
  async (req, res) => {
    try {
      const { email } = req.body;
      const user = await findUserWithEmail(email, userModel);
      if (!user) {
        throw new Error("User not found");
      }
      const token = await createJwtToken(user, createUserToken);
      res.status(200).json({ success: true, token });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ success: false, message: "Failed to login with Google" });
    }
  };

export const editUser=(userModel,updateUser,VerifyJwtToken,verifyUserToken)=>async(req,res)=>{
try{
  console.log(req,'from userController');
  await VerifyJwtToken(req, verifyUserToken);
const user=await updateUser(userModel,req)
res.json(user)
}catch(error){
res.status(400).json(error)
}
}

export const discoverUsers=(VerifyJwtToken,verifyUserToken,userModel,showUsers)=>async(req,res)=>{
try {
  await VerifyJwtToken(req, verifyUserToken);
  console.log('babu');
 const users= await showUsers(req,userModel)
 console.log(users);
 res.json(users)
} catch (error) {
  res.status(400).json(error)
}
}