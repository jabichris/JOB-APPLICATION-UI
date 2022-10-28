import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { userLogin } from '../../features/user/userActions';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = ({ props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationErrorMessage = (event) => {
    console.log('event::::',event.target)
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        const emailError = value.length < 1 ? 'Enter User Name' : '';
        setErrorMessage({ email: emailError });
        break;
      case 'password':
        const passwordError = value.length < 1 ? 'Enter Password' : '';
        setErrorMessage({ password: passwordError });
        break;
      default:
        break;
    }
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.entries(errors).forEach((item) =>  {
      if(item && item[1].length > 0 ){
      valid=false
    }})

    return valid;
  };

  const loginForm = async (event) => {
    // validationErrorMessage(event);
    setSubmitted(true);
    event.preventDefault();
    if (validateForm(errorMessage)) {
      dispatch(
        userLogin({
          email,
          password,
        })
      );
    } else {
      const emailError = email.length < 1 ? 'Enter Your Email' : '';
      setErrorMessage({ email: emailError });
      console.log('errorMessage:::',errorMessage);
      // validationErrorMessage(event)
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);
  return (
    <div className="rightPanel loginForm">
      <form>
        <div className="row">
          <div className="col-sm-2"></div>
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email:
          </label>
          <div className="col-sm-3 mb-2">
            <input
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Email"
            />
            {submitted && email.length == 0 && <span className="error">Enter Your Email</span>}
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-3 mb-2">
            <input
              type="password"
              value={password}
              autoComplete="on"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            {submitted && password.length == 0 && <span className="error">Enter Password</span>}
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-3 mt-2"></div>
          <div className="col-sm-3 mt-4">
            <a href="/register" className='ml-2'>Register</a>
            <b> or </b>
            <a href="/application">apply to a job</a>
          </div>
          <div className="col-sm-3 center mt-4 center">
            <button type="submit" className="button" onClick={loginForm}>
              Login
            </button>
          </div>
          <div className="col-sm-3 mt-2"></div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
