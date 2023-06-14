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
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
            <Routes>
              <Route element={<UserPrivateRoute />}>
                <Route path="/home" element={<HomePage />} />
              </Route>
              <Route element={<UserPublicRoute />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/otp" element={<OtpPage />} />
                <Route element={<RegisterRoute />}>
                  <Route path="/createAccount" element={<CreateAccount />} />
                </Route>
              </Route>
            </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
