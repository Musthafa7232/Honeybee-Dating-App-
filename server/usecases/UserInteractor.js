import path from "path";
export const createNewUser = async (userData, userModel) => {
  try {
    const user = new userModel(userData);
    await user.save();
    return user;
  } catch (error) {
    console.log(err);
    throw new Error("failed to create new user");
  }
};

export const findUserWithPhone = async (phone, userModel) => {
  try {
    const user = await userModel.findOne({ phone });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find user with phone");
  }
};

export const findUserWithEmail = async (email, userModel) => {
  try {
    const user = await userModel.findOne({ email });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find user");
  }
};

export const findUserWithId = async (id, userModel) => {
  try {
    return await userModel.findById(id);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find user");
  }
};

export const UpdateUser = async (
  userModel,
  req,
  cloudinary,
  uploadProfilePic,
  uploadCoverPic,
  removeFile
) => {
  try {
    const {
      fullName,
      email,
      birthday,
      age,
      gender,
      location,
      faith,
      drinking,
      smoking,
      bio,
      phone,
      Preference,
      realationshipStatus,
    } = req.body;
    const user = await userModel.findById(req.user.id);
    (user.fullName = fullName),
      (user.email = email),
      (user.birthday = birthday),
      (user.age = age),
      (user.gender = gender),
      (user.location = location),
      (user.phone = phone),
      (user.Preference = Preference),
      (user.faith = faith),
      (user.drinking = drinking),
      (user.smoking = smoking),
      (user.bio = bio),
      (user.realationshipStatus = realationshipStatus);

    if (req?.files?.profilePic) {
      const result = await uploadProfilePic(
        req.files.profilePic[0].path,
        cloudinary,
        removeFile
      );
      user.profilePic = result;
    }

    if (req?.files?.coverPic) {
      const result = await uploadCoverPic(
        req.files.coverPic[0].path,
        cloudinary,
        removeFile
      );
      user.coverPic = result;
    }

    if (req?.files?.image0) {
      const image0Path = req.files.image0[0].path
        .slice(7)
        .replace(new RegExp("\\" + path.sep, "g"), "/");
      const image0File =
        process.env.BASEURL + process.env.PORT + "/" + image0Path;
      user.images[0] = image0File;
    }

    if (req?.files?.image1) {
      const image1Path = req.files.image1[0].path
        .slice(7)
        .replace(new RegExp("\\" + path.sep, "g"), "/");
      const image1File =
        process.env.BASEURL + process.env.PORT + "/" + image1Path;
      user.images[1] = image1File;
    }

    if (req?.files?.image2) {
      const image2Path = req.files.image2[0].path
        .slice(7)
        .replace(new RegExp("\\" + path.sep, "g"), "/");
      const image2File =
        process.env.BASEURL + process.env.PORT + "/" + image2Path;
      user.images[2] = image2File;
    }
    user.save();
    return user;
  } catch (error) {
    throw new Error("failed to update User");
  }
};

export const showUsers = async (req, userModel) => {
  try {
    const user = await userModel.findById(req.user.id);
    let users;
    if (user.Preference === "Everyone") {
      users = await userModel.find({ _id: { $ne: user._id } });
    } else {
      users = await userModel.aggregate([
        {
          $match: {
            gender: user.Preference,
          },
        },
      ]);
    }
    return users;
  } catch (error) {
    throw new Error("Failed to lookup users");
  }
};

export const likeUserAndMatch = async (user1, user2, userModel, matchModel) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      user1,
      {
        $push: {
          likedUsers: user2,
        },
      },
      { new: true }
    );

    let match = await matchModel.findOne({
      $or: [
        {
          $and: [{ "user1._id": user1 }, { "user2._id": user2 }],
        },
        {
          $and: [{ "user1._id": user2 }, { "user2._id": user1 }],
        },
      ],
    });
    if (match) {
      (match.user2.liked = true), (match.isMatched = true);
      await match.save();
    } else {
      match = await new matchModel({
        user1: {
          _id: user1,
          liked: true,
        },
        user2: {
          _id: user2,
        },
      });
      await match.save();
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to like User ");
  }
};

export const dislikeAUser = async (user1, user2, userModel, matchModel) => {
  try {
    console.log(user2);
    let user;
    const isUserLiked = await userModel.findOne({
      _id: user1,
      likedUsers: { $in: [user2] },
    });
    console.log(isUserLiked);
    if (isUserLiked) {
      isUserLiked.likedUsers.pull(user2);
      const match = await matchModel.findOne({
        $or: [
          {
            $and: [{ "user1._id": user1 }, { "user2._id": user2 }],
          },
          {
            $and: [{ "user1._id": user2 }, { "user2._id": user1 }],
          },
        ],
        isMatched: true,
      });
      if (match) {
        if (match.user1._id == user1) {
          match.user1.liked = false;
          match.isMatched = false;
        } else {
          match.user2.liked = false;
          match.isMatched = false;
        }
        await match.save();
      }
      await isUserLiked.save();
    }
    user = await userModel.findByIdAndUpdate(
      user1,
      {
        $push: {
          dislikedUsers: user2,
        },
      },
      { new: true }
    );

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to dislike User");
  }
};

export const blockAUser = async (user1, user2, userModel) => {
  try {
    let user;
    const isUserBlocked = await userModel.findOne({
      _id: user1,
      blockedUsers: { $in: [user2] },
    });
    if (isUserBlocked) {
      isUserBlocked.blockedUsers.pull(user2);
      await isUserBlocked.save();
      user = isUserBlocked;
    } else {
      user = await userModel.findByIdAndUpdate(
        user1,
        {
          $push: {
            blockedUsers: user2,
          },
        },
        { new: true }
      );
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to block User");
  }
};

export const showAllLikedUsers = async (id, userModel) => {
  try {
    const user = await userModel.findById(id);
    const users = await userModel.find({ _id: { $in: user.likedUsers } });

    return users;
  } catch (error) {
    console.log(error);
  }
};

export const verifySubscription=async(userModel,pack,user)=>{
try {
  let updatedUser
  const isuserPresent=await userModel.find({_id:user,HoneyVipType:{
    $in:[pack]
  }})
  console.log(isuserPresent);
if(!isuserPresent.length>0){
  updatedUser=await userModel.findByIdAndUpdate(user,{
    $push:{
      HoneyVipType:pack
    }
  })
}else{
  updatedUser=isuserPresent
}
return updatedUser
} catch (error) {
  console.log(error,'');
}
}