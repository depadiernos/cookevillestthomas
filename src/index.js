import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Community from './components/community';

const App = () => (
  <Router>
    <AppContainer className="App">
      <Header/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Footer/>
    </AppContainer>
  </Router>
);

const AppContainer = styled.div`
  font-family: Sans;
`

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
