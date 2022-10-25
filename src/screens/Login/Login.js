import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { userLogin } from '../../features/user/userActions';

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

  const inputChange = (event) => {
    const { name, value } = event.target;
    validationErrorMessage(event);
  };

  const validationErrorMessage = (event) => {
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
    console.log(errors);
    Object.entries(errors).forEach((item) => {
      console.log(item);
      item && item[1].length > 0 && (valid = false);
    });
    console.log(valid);
    return valid;
  };

  const loginForm = async (event) => {
    setSubmitted(true);
    event.preventDefault();
    if (validateForm(errorMessage)) {
      console.log(email, password);
      dispatch(
        userLogin({
          email,
          password,
        })
      );
    } else {
      console.log('Invalid Form');
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);
  return (
    // <div className="pagecenter loginForm">
    <>
      <form>
        <div className="row">
          <div className="col-sm-3"></div>
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
            {submitted && errorMessage.email.length > 0 && <span className="error">{errorMessage.email}</span>}
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
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
            {submitted && errorMessage.password.length > 0 && <span className="error">{errorMessage.password}</span>}
          </div>
          <div className="col-sm-4"></div>
        </div>
        {/* <div className="row">
            <div className="col-sm-12 center mt-1">
              { submitted && loginStatus.length > 0 &&  <span className='error'>{loginStatus}</span>}
            </div>
          </div> */}
        <div className="row">
          <div className="col-sm-12 center mt-2">
            <button type="submit" className="button" onClick={loginForm}>
              Login
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 mt-2"></div>
          <div className="col-sm-4 right">
            <a href="/register">Register</a>
          </div>
          <div className="col-sm-4 mt-2"></div>
        </div>
      </form>
    </>
  );
};
export default Login;
