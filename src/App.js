import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection'; // Import the MainSection component
import GetStarted from './components/GetStarted';
import Web3 from './components/Web3';
import ImageGallery from './components/ImageGallery';
import Build from './components/Build';
import Composable from './components/Composable';
import GrowYourBusiness from './components/GrowYourBusiness';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection /> {/* Include the MainSection component */}
      <div className="main">
        {/* Sections */}
        <GetStarted />
        <Web3 />
        <ImageGallery />
        <Build />
        <Composable />
        <GrowYourBusiness />
      </div>
      <Footer />
    </div>
  );
}

export default App;
