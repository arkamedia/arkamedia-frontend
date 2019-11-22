import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../src/Pages/Home';
import AdminDash from '../src/Pages/AdminDash/AdminDash';
import Cart from '../src/Pages/Cart/Cart';
import Detail from '../src/Pages/Detail/Detail';

const App = () => {
  return (
    <>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/admindash' component={AdminDash}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/detail' component={Detail}/>
    </Router>
    </>
  );
};

export default App;
