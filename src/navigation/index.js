import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
// import Confirmation from '../screens/Confirmation';
// import { AuthContext } from '../features/userSlice';
import { getStore } from '../utils';

// function AuthenticatedRoute ({component: Component, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         const user = JSON.stringify(window.localStorage.getItem("token"));
//         console.log('token:',typeof user)
//         return ((user!=='null') ? <Component {...props} />
//         : 
//         <Navigate to={{pathname: '/login', state: {from: props.location}}} />)}}
//     />
//   )
// }

class Navigation extends Component {
  render() {
    return (
        <Router>
          <Routes>
          <Route exact path="/" element={Login} />
            {/* <Route path="/register" component={Register} /> */}
            {/* <AuthenticatedRoute exact path='/home' component={Home} /> */}
          </Routes>
           
        </Router>
    )
  }
}

export default Navigation;