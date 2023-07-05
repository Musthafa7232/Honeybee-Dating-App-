export const getMatchedUsers = async (id, matchModel, userModel) => {
  try {
    let match = await matchModel.find({
      $or: [
        {
          "user1._id": id,
        },
        {
          "user2._id": id,
        },
      ],
      isMatched: true,
    });
    let matches = [];

    match.forEach((arr) => {
      if (arr.user1._id != id) {
        matches.push(arr.user1._id);
      } else if (arr.user2._id != id) {
        matches.push(arr.user2._id);
      }
    });
    const usersData = await userModel.find({ _id: { $in: matches } });
    console.log(matches, "from here");
    return usersData;
  } catch (error) {
    console.log(error);
    throw new error("failed to show users");
  }
};
