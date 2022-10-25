import React from 'react';
import { connect } from 'react-redux';
import  Header from './components/Header';
import  Footer from './components/Footer';
import Navigation from './navigation';
// import { getStore } from './utils';
import './App.css';
// import { ActionCreators } from './constants/actionTypes/profile';
import './styles';

const App = () =>  {
  // componentDidMount() {
  //   const user = getStore('user')
  //   console.log()
  //   if (user) {
  //     this.props.dispatch(ActionCreators.login(user));
  //   }
  // }

    return (
      <div >
        <Header />
        <Navigation />
        <Footer />
      </div>
    );
  }

// const mapStateToProps = (state) => {
//   return {
//     profile: state.profile
//   }
// }

export default App;