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
import RegisterRoute from "./routes/RegisterRoute";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import UserPublicRoute from "./routes/UserPublicRoute";
import IncomingCallModal from "./components/IncomingCall/IncomingCallModal";
import { SetOnlineUserData } from "./features/users/OnlineUsers";
import SubscriptionPage from "./Pages/SubscriptionPage/SubscriptionPage";

const CreateAccount = lazy(() => import("./Pages/CreateAccount/CreateAccount"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const LandingPage = lazy(() => import("./Pages/LandingPage/landingPage"));
const OtpPage = lazy(() => import("./Pages/OtpPage/otpPage"));
const VideoCall = lazy(() => import("./Pages/VideoCall/VideoCall"));
const LikedUsersPage = lazy(() =>
  import("./Pages/LikedUsersPage/LikedUsersPage")
);
const OtpRoute = lazy(() => import("./routes/OtpRoute"));
const NotFound = lazy(() => import("./Pages/404Page/NotFound"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const GoogleLogin = lazy(() => import("./Pages/GoogleLogin/GoogleLogin"));
const MatchesPage = lazy(() => import("./Pages/Matches/MatchesPage"));
const ChatPage = lazy(() => import("./Pages/ChatPage/ChatPage"));

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
