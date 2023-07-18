import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { socket } from "./Socket";
import { useState, useEffect, lazy, Suspense } from "react";
import RegisterRoute from "./routes/RegisterRoute";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import UserPublicRoute from "./routes/UserPublicRoute";

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

  useEffect(() => {
    if (user) {
      socket.connect();
      socket.emit("add-user", user._id);
      socket.emit('getOnlineUsers',user._id)
    }
  }, [user]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route element={<UserPrivateRoute />}>
              <Route path="/Discover" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Matches" element={<MatchesPage />} />
              <Route path="/LikedUsers" element={<LikedUsersPage />} />
              <Route path="/Search" element={<HomePage />} />
              <Route path="/HoneyVip" element={<HomePage />} />
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
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
