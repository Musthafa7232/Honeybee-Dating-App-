import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    from: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    to: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    messageType: {
      type: String,
      enum: ["text", "video", "audio", "image"],
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
