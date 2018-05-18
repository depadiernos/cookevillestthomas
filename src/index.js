import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Community from './components/community';
import Growth from './components/growth';
import Contact from './components/contact';
import News from './components/news';


const App = () => (
  <Router>
    <Fragment>
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/news" component={News} />
      <Route path="/growth" component={Growth} />
      <Route path="/contact" component={Contact} />
      <Footer/>
    </Fragment>
  </Router>
);

injectGlobal`
  body {
    font-family: Sans;
    max-width: 1000px;
    margin: 0 auto;
    background: #FDFCF8;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
