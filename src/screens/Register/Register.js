import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import { registerUser } from '../../features/user/userActions';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
        break;
      case 'password':
        errors.user.password = value.length < 1 && value.length > 10 ? 'Enter valid password' : '';
        break;
      default:
        break;
    }

    this.setState({ errors });
  }


  const validateForm = (errors) => {
    let valid = true;
    Object.entries(errors).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    return valid;
  }

  const [submitted, setSubmitted] = useState(false);

  const { loading, userInfo, error } = useSelector((state) => {
    return state.user});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (event) => {
    setSubmitted(true);
    event.preventDefault();
    if (validateForm(errorMessage)) {
      console.info('Valid Form')
      dispatch(registerUser({
        firstName,
        lastName,
        email,
        password,
      }));
      toast('Registration Success')
      // navigate('/home');
    } else {
      setErrorMessage({ email: 'failed' });
      toast('Registration Failed')
      console.log('Invalid Form')
    }
  }

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/home');
  //   }
  // }, [navigate, userInfo]);
  return (
    <div className="rightPanel">
      <ToastContainer/>
      <div className="row">
        <div className="col-sm-1">
        </div>
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-3 mb-2">
          <input type="text" value={firstName} name="firstName" onChange={(e) => { setFirstName(e.target.value) }} className="form-control" placeholder="First Name" />
          {submitted && errorMessage.firstName.length > 0 && <span className='error'>Enter First Name</span>}
        </div>
        <div className="col-sm-3 mb-2">
          <input type="text" value={lastName} name="lastName" onChange={(e) => { setLastName(e.target.value) }} className="form-control" placeholder="Last Name" />
        </div>
        <div className="col-sm-3">
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
        </div>
        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-6 mb-2">
          <input type="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" placeholder="anyone@email.com" />
          {submitted && email.length == 0 && <span className='error'>Enter valid email</span>}
        </div>
        <div className="col-sm-3">
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
        </div>
        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-6 mb-2">
          <input type="password" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" placeholder="*********" />
          {submitted && password.length == 0 && <span className='error'>Enter password</span>}
        </div>
        <div className="col-sm-3">
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 mb-2">
        </div>
        <div className='col-sm-2'>
          <a href="/home" className='ml-2'>Login</a>
          <b> or </b>
            <a href="/application">apply to a job</a>
        </div>
        <div className="col-sm-4">
          <button type="button" className="button" onClick={submitForm}>Submit</button>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  )
}

export default Register;