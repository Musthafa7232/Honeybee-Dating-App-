import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import LandingPage from './Pages/Landingpage/landingPage';
import OtpPage from './Pages/OtpPage/otpPage';
import HomePage from './Pages/HomePage/HomePage';
import ContextProvider from './ContextProvider';
import CreateAccount from './Pages/CreateAccount/CreateAccount';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/otp' element={<OtpPage />} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/createAccount' element={<CreateAccount/>} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
