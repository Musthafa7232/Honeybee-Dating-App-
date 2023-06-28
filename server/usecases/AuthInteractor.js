export const createJwtToken = async (user,createUserToken) => {
  try {
    return createUserToken(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const VerifyJwtToken = (req,verifyUserToken) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    return verifyUserToken(token);
  } catch (error) {
    throw new Error(error);
  }
};
