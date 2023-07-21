import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "./Socket";
import { useState, useEffect, lazy, Suspense } from "react";
import RegisterRoute from "./routes/RegisterRoute.jsx";
import UserPrivateRoute from "./routes/UserPrivateRoute.jsx";
import UserPublicRoute from "./routes/UserPublicRoute.jsx";
import IncomingCallModal from "./components/IncomingCall/IncomingCallModal.jsx";
import { SetOnlineUserData } from "./features/users/OnlineUsers.js";
import SubscriptionPage from "./Pages/SubscriptionPage/SubscriptionPage.jsx";

const CreateAccount = lazy(() => import("./Pages/CreateAccount/CreateAccount.jsx"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage.jsx"));
const LandingPage = lazy(() => import("./Pages/LandingPage/landingPage.jsx"));
const OtpPage = lazy(() => import("./Pages/OtpPage/otpPage.jsx"));
const VideoCall = lazy(() => import("./Pages/VideoCall/VideoCall.jsx"));
const LikedUsersPage = lazy(() =>
  import("./Pages/LikedUsersPage/LikedUsersPage.jsx")
);
const OtpRoute = lazy(() => import("./routes/OtpRoute.jsx"));
const NotFound = lazy(() => import("./Pages/404Page/NotFound.jsx"));
const Profile = lazy(() => import("./Pages/Profile/Profile.jsx"));
const GoogleLogin = lazy(() => import("./Pages/GoogleLogin/GoogleLogin.jsx"));
const MatchesPage = lazy(() => import("./Pages/Matches/MatchesPage.jsx"));
const ChatPage = lazy(() => import("./Pages/ChatPage/ChatPage.jsx"));

function App() {
  const user = useSelector((state) => state.user.user);
  const [call, setCall] = useState({
    modal: false,
  });
  const [loader,setLoader]=useState(true)
  const { pathname } = useLocation()
  const dispatch=useDispatch()
  useEffect(() => {
    if (user) {
      socket.connect();
      socket.emit("add-user", user._id);
      socket.emit("getOnlineUsers", user._id);
    } 
  }, [user,pathname]);

  useEffect(()=>{
    setTimeout(()=>{
    setLoader(false)
    },6000)
      },[])
  
useEffect(()=>{
  if(socket){
    socket.on("connect_error", (error) => {
      console.log("Socket connect_error:", error)
    })

    socket.on("error", (error) => {
      console.log("Socket error:", error)
    })
    socket.on("incoming-video-call", (data) => {
      setCall(data);
    });
    socket.on("onlineUsersList", (data) => {
     dispatch(SetOnlineUserData(data))
    });
  }
  return()=>{
    socket.off('connect_error')
    socket.off('error')
  }
},[])


  
  const handleClose = () => {
    setCall(prev=>({...prev,modal:false}));
  };
  return (
    <div className="App">
      <Suspense  fallback={<div>Loading...</div>} >
          <Routes>
            <Route element={<UserPrivateRoute />}>
              <Route path="/Discover" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Matches" element={<MatchesPage />} />
              <Route path="/LikedUsers" element={<LikedUsersPage />} />
              <Route path="/Search" element={<HomePage />} />
              <Route path="/HoneyVip" element={<SubscriptionPage />} />
              <Route path="/Chat" element={<ChatPage />} />
              <Route path="/room/:roomId" element={<VideoCall />} />
            </Route>
            <Route element={<UserPublicRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<OtpRoute />}>
                <Route path="/otp" element={<OtpPage />} />
              </Route>
              <Route path="/googleLogin" element={<GoogleLogin />} />
              <Route element={<RegisterRoute />}>
                <Route path="/createAccount" element={<CreateAccount />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <IncomingCallModal open={call} close={handleClose} />
      </Suspense>
    </div>
  );
}

export default App;
