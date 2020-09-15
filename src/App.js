import React from 'react';
import Header from '../src/components/Header/Header'
import Foods from '../src/components/Foods/Foods'
import Footer from '../src/components/Footer/Footer'
import Testimonial from './components/Testimonial/Testimonial';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
