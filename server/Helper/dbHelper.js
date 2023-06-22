import userModel from "../model/userModel.js";

export const createNewUser = async ({
  fullName,
  email,
  birthday,
  age,
  gender,
  location,
  phone,
  Preference,
  isVerified,
}) => {
  const user = new userModel({
    fullName,
    email,
    birthday,
    age,
    gender,
    location,
    phone,
    Preference,
    isVerified,
  });
  console.log(user);
  try {
    await user.save();
    return user;
  } catch (err) {
    console.log(err);
    res.json(err).status(401);
  }
};

export const findUserWithPhone = async (phone) => {
  try {
    const user = await userModel.findOne({ phone });
    return user;
  } catch (err) {
    res.json(err).status(401);
  }
};

export const findUserWithEmail = async (email) => {
  try {
    const user = await userModel.findOne({email });
    return user;
  } catch (err) {
    res.json(err).status(401);
  }
};
