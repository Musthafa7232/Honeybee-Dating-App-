export const createNewUser = async (userData,userModel) => {
  const user = new userModel(userData);
  return user.save();
};

export const findUserWithPhone = async (phone,userModel) => {
  try {
    const user = await userModel.findOne({ phone });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user with phone');
  }
};

export const findUserWithEmail = async (email,userModel) => {
  try {
    const user = await userModel.findOne({ email });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user');
  }
};


export const findUserWithId=async(id,userModel)=>{
  try{
    return  await userModel.findById(id);
  }catch(error){
    console.error(error);
    throw new Error('Failed to find user');
  }
}