import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Application from '../screens/Application';
import { useSelector } from 'react-redux';


const Navigation = () => {
  const { loading, userToken, error } = useSelector((state) => state.user);
  console.log("userToken::::::::",typeof userToken)
    return (
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path='/home' element={<Home  userToken={userToken}/>} />
          <Route exact path='/application' element={<Application />}/>
          <Route exact path='/*' element={<Application/>}/>
        </Routes>
      </Router>
    );
}

export default Navigation;
