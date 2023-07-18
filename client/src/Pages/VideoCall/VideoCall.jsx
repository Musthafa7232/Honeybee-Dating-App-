import React from "react"
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useSelector } from "react-redux"

const VideoCall = () => {
  const user = useSelector((state) => state.user.user)
  const { roomId } = useParams()
  const myMeeting = async (element) => {
    const appID = 210004452
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRETE
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      user._id,
      user.fullName
    )
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showPreJoinView: false,
    })
  }

  return (
    <div>
      {user && 
        <div
          ref={myMeeting}
          className="myCallContainer"
          style={{ width: "100vw", height: "100vh" }}
        ></div>}
    </div>
  )
}

export default VideoCall