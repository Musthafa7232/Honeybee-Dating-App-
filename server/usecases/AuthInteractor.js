export const createJwtToken = async (user, createUserToken) => {
  try {
    return createUserToken(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const VerifyJwtToken = (req, verifyUserToken) => {
  const token = req.header("auth-token");
  console.log(token);
  if (token) {
 try {
    const verifiedUser= verifyUserToken(token,req);
    return verifiedUser
  } catch (error) {
    throw new Error(error);
  }
  }else{
    throw new Error("Access Denied");
  }
};
