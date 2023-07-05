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

export const UpdateUser = async (userModel, req) => {
  try {
    const {
      fullName,
      email,
      birthday,
      age,
      gender,
      location,
      faith,
      myStory,
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
      (user.myStory = myStory),
      (user.drinking = drinking),
      (user.smoking = smoking),
      (user.bio = bio),
      (user.realationshipStatus = realationshipStatus);

    if (req?.files?.profilePic) {
      const profilePicPath = req.files.profilePic[0].path
        .slice(7)
        .replace(new RegExp("\\" + path.sep, "g"), "/");
      const profilePicFile =
        process.env.BASEURL + process.env.PORT + "/" + profilePicPath;
      user.profilePic = profilePicFile;
    }

    if (req?.files?.coverPic) {
      const coverPicPath = req.files.coverPic[0].path
        .slice(7)
        .replace(new RegExp("\\" + path.sep, "g"), "/");
      const coverPicFile =
        process.env.BASEURL + process.env.PORT + "/" + coverPicPath;
      user.coverPic = coverPicFile;
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
    console.log(user);
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
      console.log(users);
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
    console.log(user);

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

export const dislikeAUser = async (user1, user2, userModel) => {
  try {
    const user = await userModel.findByIdAndUpdate(
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
    throw new Error("failed to like User ");
  }
};
