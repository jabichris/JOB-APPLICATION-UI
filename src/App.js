import React from 'react';
import  Header from './components/Header';
import  Footer from './components/Footer';
import Navigation from './navigation';
import './App.css';
import './styles';

const App = () =>  {

    return (
      <div >
        <Header />
        <Navigation />
        <Footer />
      </div>
    );
  }

export default App;
