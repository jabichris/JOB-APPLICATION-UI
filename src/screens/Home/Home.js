import React from 'react';
import { Welcome } from '../../components';
import { useSelector } from 'react-redux';

const Home = ()=>{
 return (
      <div className="row">
        <div className="rightPanel">
          <Welcome />
        </div>
      </div>
    )
}

export default Home;