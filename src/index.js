import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Community from './components/community';

const App = () => (
  <div className="App">
    <Header/>
      <div id='home'>
        <Home/>
      </div>
      <div id='About'>
        <About/>
      </div>
      <div id='Community'>
        <Community/>
      </div>
    <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
