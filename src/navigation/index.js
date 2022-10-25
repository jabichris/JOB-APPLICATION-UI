import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../screens/Login';
class Navigation extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/register" component={Register} /> */}
          {/* <AuthenticatedRoute exact path='/home' component={Home} /> */}
        </Routes>
      </Router>
    );
  }
}

export default Navigation;
