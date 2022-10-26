import React from 'react';
import { Welcome } from '../../components';
import { useSelector } from 'react-redux';
import Login from '../Login';

const Home = (userToken)=>{
 return (
      <div className="row">
        <div className="rightPanel">
        {userToken.userToken?<Welcome />:<Login/>}
        </div>
      </div>
    )
}

export default Home;