import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LandingPage from "./Pages/Landingpage/landingPage";
import OtpPage from "./Pages/OtpPage/otpPage";
import HomePage from "./Pages/HomePage/HomePage";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import RegisterRoute from "./routes/RegisterRoute";
import store from "./store/store";
import { Provider } from "react-redux";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import UserPublicRoute from "./routes/UserPublicRoute";
import OtpRoute from "./routes/OtpRoute";
import NotFound from "./Pages/404Page/NotFound";
import Profile from "./Pages/Profile/Profile";
import GoogleLogin from "./Pages/GoogleLogin/GoogleLogin";
import MatchesPage from "./Pages/Matches/MatchesPage";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<UserPrivateRoute />}>
              <Route path="/Discover" element={<HomePage />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/Matches" element={<MatchesPage/>} />
              <Route path="/Search" element={<HomePage />} />
              <Route path="/HoneyVip" element={<HomePage />} />
              <Route path="/Chat" element={<HomePage />} />
            </Route>
            <Route element={<UserPublicRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<OtpRoute />}>
                <Route path="/otp" element={<OtpPage />} />
              </Route>
              <Route path="/googleLogin" element={<GoogleLogin/>}/>
              <Route element={<RegisterRoute />}>
                <Route path="/createAccount" element={<CreateAccount />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
