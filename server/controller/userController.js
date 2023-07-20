export const userDetails =
  (createNewUser, createJwtToken, userModel, createUserToken) =>
  async (req, res) => {
    try {
      const user = await createNewUser(req.body, userModel);
      const token = await createJwtToken(user, createUserToken);
      res
        .status(200)
        .json({ success: true, redirect: "/Discover", user, token });
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
          res.json({ success: true, token, redirect: "/Discover" });
        }
      } else {
        throw new Error("Failed to verify OTP");
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Some error occurred" });
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
      res.redirect(`http://localhost:5173`);
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
      res.status(200).json({ success: true, token, redirect: "/Discover",user:user });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ success: false, message: "Failed to login with Google" });
    }
  };

export const editUser = (userModel, updateUser,cloudinary,uploadProfilePic,uploadCoverPic,removeFile) => async (req, res) => {
  try {
    const user = await updateUser(userModel, req,cloudinary,uploadProfilePic,uploadCoverPic,removeFile);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const userData = (findUserWithId, userModel) => async (req, res) => {
  try {
    const user = await findUserWithId(req.user.id, userModel);
    res.json(user).status(200);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const discoverUsers = (userModel, showUsers) => async (req, res) => {
  try {
    const users = await showUsers(req, userModel);
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const likeUser =
  (userModel, matchModel, likeUserAndMatch) => async (req, res) => {
    try {
      const { User } = req.body;
      const user = await likeUserAndMatch(
        req.user.id,
        User,
        userModel,
        matchModel
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

export const dislikeUser = (userModel, dislikeAUser,matchModel) => async (req, res) => {
  try {
    const { User } = req.body;
    const user = await dislikeAUser(req.user.id, User, userModel,matchModel);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const blockUser = (userModel, blockAUser) => async (req, res) => {
  try {
    const { User } = req.body;
    const user = await blockAUser(req.user.id, User, userModel);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const matchedUsers =
  (getMatchedUsers, matchModel, userModel) => async (req, res) => {
    try {
      const matches = await getMatchedUsers(req.user.id, matchModel, userModel);
      res.status(200).json(matches);
    } catch (error) {
      res.status(400).json(error);
    }
  };

export const getAllLikedUsers =
  (showAllLikedUsers, userModel) => async (req, res) => {
    try {
      const users = await showAllLikedUsers(req.user.id, userModel);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  };
